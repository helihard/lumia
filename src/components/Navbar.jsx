import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <Link to={"/"}>Home</Link>&nbsp;
      <Link to={"/contact"}>Contact</Link>
    </>
  )
}

export default Navbar
