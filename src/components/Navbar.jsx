import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header>
      <nav className="nav flex-column flex-sm-row">
        <Link
          to={"/"}
          className="flex-sm-fill flex-grow-1 text-sm-left nav-link"
        >
          <h1>LUMIA</h1>
        </Link>
        &nbsp;
        <Link to={"/contact"} className="text-sm-right nav-link contact-us">
          Kontakta oss
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
