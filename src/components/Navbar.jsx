import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalShow = () => {
    setShowModal(true);
  };

  return (
    <>
      <header>
        <nav className="nav flex-column flex-sm-row">
          <Link
            to={"/lumia"}
            className="flex-sm-fill flex-grow-1 text-sm-left nav-link"
          >
            <h1>LUMIA</h1>
          </Link>
          <a
            className="text-sm-right nav-link cart"
            href="#"
            onClick={handleModalShow}
          >
            Varukorg
          </a>
          &nbsp;
          <Link
            to={"/lumia/contact"}
            className="text-sm-right nav-link contact-us"
          >
            Kontakta oss
          </Link>
        </nav>
      </header>
      <Cart show={showModal} handleClose={handleModalClose} />
    </>
  );
}

export default Navbar;
