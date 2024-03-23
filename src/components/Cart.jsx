import { Modal, Button } from "react-bootstrap"
import PropTypes from "prop-types"
import { useContext } from "react"
import { CartContext } from "../context/CartContext.jsx"

const Cart = ({ show, handleClose }) => {
  const { cartItems, addToCart, removeFromCart, emptyCart, getCartTotal } =
    useContext(CartContext)

  return (
    <Modal
      show={show}
      onHide={handleClose}
      animation={false}
      className="corners overlay modal-xl"
      id="cart"
      style={{ opacity: 0.7 }}
    >
      <div style={{ margin: 10 + "px" }}>
        <h3>Varukorg</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>{item.cost}</span>
            </li>
          ))}
        </ul>
        <ul>
          {cartItems.length > 0 ? (
            <li className="total">
              Total <span>{getCartTotal()}</span>
            </li>
          ) : (
            <li className="total">
              Total <span>0</span>
            </li>
          )}
        </ul>
      </div>
      <Button variant="secondary" onClick={handleClose} id="modal-close-button">
        X
      </Button>
    </Modal>
  )
}

Cart.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default Cart
