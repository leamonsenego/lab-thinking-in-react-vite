import React, {useState} from "react";

import ProductTable from "./ProductTable.jsx";
import SearchBar from "./SearchBar.jsx";

import JSON_DATA from "../data.json";

import "../styles/ProductsPage.css"

const ProductsPage = () => {
  const [products, setProducts] = useState(JSON_DATA);

  const handleSearch = (searchValue, showInStock) => {
    let filteredProducts = JSON_DATA.filter((product) => {
      const productParsed = product.name.toLowerCase()

      const isNameMatched = productParsed.includes(searchValue.toLowerCase())
      const isInStock = product.inStock

      if(showInStock) {
        return isNameMatched && isInStock
      } else {
        return isNameMatched
      }
    });

    setProducts(filteredProducts);
  };


  return (
    <div className={"header"}>
      <h1>IronStore</h1>
      <div className={"product-page-body"}>
        <SearchBar onSearch={handleSearch}/>
        <ProductTable products={products}/>
      </div>
    </div>
  );
}

export default ProductsPage
