import React from "react";
import ProductCard from "./ProductCard.jsx";
import "../styles/ProductTable.css"

const ProductTable = ({products}) =>{
  return(
    <div className={"product-table"}>
      {products.map((product) => {
        return (
          <ProductCard key={product.id} product={product} className={"product-card"}/>
        )
      })}
    </div>
  )
}
export default ProductTable
