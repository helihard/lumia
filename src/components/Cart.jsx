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
        <div id="cart-top-row">
          <h3>Varukorg</h3>{" "}
          <Button
            variant="secondary"
            onClick={handleClose}
            id="modal-close-button"
          >
            X
          </Button>
        </div>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>
                {item.cost}&nbsp;
                <button
                  onClick={() => {
                    addToCart(item)
                  }}
                >
                  +
                </button>
                &nbsp;
                <button onClick={() => removeFromCart(item)}>-</button>
              </span>
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
        <div id="cart-buttons-div">
          <button
            onClick={emptyCart}
            type="button"
            className="btn btn-outline-dark"
            style={{ marginTop: 10 + "px", width: 200 + "px" }}
            disabled={cartItems.length === 0}
          >
            Töm varukorgen
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            style={{ marginTop: 10 + "px", width: 200 + "px" }}
            onClick={emptyCart}
            disabled={cartItems.length === 0}
          >
            Beställ
          </button>
        </div>
      </div>
    </Modal>
  )
}

Cart.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default Cart
