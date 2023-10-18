import "../styles/ProductCard.css"
import React from "react";


const ProductCard = ({product}) => {
  const {name, category, price, inStock} = product;

  const productStyle = {
    color: !inStock ? 'red' : 'black ',
  };

  return (
    <div className={"product-card"}>
        <h4>{name}</h4>
        <h6> {category} </h6>
        <h5> {price} </h5>
      <div class={"button-wrapper"}>
        {inStock? <button className={"addBtn"}> Add to cart </button> : <p style={productStyle}> sold out </p>}
      </div>
    </div>
  )
}

export default ProductCard
