import { Modal, Button } from "react-bootstrap"
import PropTypes from "prop-types"

const Cart = ({ show, handleClose }) => {
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
          <li></li>
        </ul>
        <ul>
          <li className="total">
            Total <span>0</span>
          </li>
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
