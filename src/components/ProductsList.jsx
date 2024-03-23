import { CartContext } from "../context/CartContext.jsx"
import { useContext, useState, useEffect } from "react"
import Cart from "./Cart.jsx"

const ProductsList = ({ filteredProducts }) => {
  const { addToCart } = useContext(CartContext)

  const [showModal, setShowModal] = useState(false)

  const handleModalClose = () => {
    setShowModal(false)
  }

  const handleAddToCart = (product) => {
    addToCart(product)
    setShowModal(true)
  }

  return (
    <>
      <div className="lamps">
        {filteredProducts.map((product) => (
          <div className="product clearfix" key={product.id}>
            <img src={product.image} alt={product.name}></img>
            <div className="content">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <button data-click="buy" onClick={() => handleAddToCart(product)}>
                Köp för {product.cost} kr
              </button>
            </div>
          </div>
        ))}
      </div>
      <Cart show={showModal} handleClose={handleModalClose} />
    </>
  )
}

export default ProductsList
