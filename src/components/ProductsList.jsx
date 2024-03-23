import { CartContext } from "../context/CartContext.jsx"
import { useContext, useState, useEffect } from "react"

const ProductsList = ({ filteredProducts }) => {
  const { cartItems, addToCart } = useContext(CartContext)

  return (
    <div className="lamps">
      {filteredProducts.map((product) => (
        <div className="product clearfix" key={product.id}>
          <img src={product.image} alt={product.name}></img>
          <div className="content">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button data-click="buy" onClick={() => addToCart(product)}>
              Köp för {product.cost} kr
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductsList
