import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Navbar from "./Navbar.jsx";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/lumia" element={<Home />} />
          <Route path="/lumia/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
