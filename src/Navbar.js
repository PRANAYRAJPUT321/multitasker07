
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
        <div className="navbar-container">
        < Link to="/" className="nav-menus">Home</Link> 
        < Link to="/about"className="nav-menus">About</Link> 
        < Link to="/contact" className="nav-menus">Contact</Link> 
    </div>
      
   
  )
}

export default Navbar;
