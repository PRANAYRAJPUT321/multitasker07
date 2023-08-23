
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
        <div className="navbar-container">
        < Link to="/" className="nav-menus">Home</Link> 
        < Link to="/about"className="nav-menus">About</Link> 
        < Link to="/contact" className="nav-menus">Contact</Link> 
        <input type="text" id="text" className="search-box"></input>
        <button className="search-button">Search</button>
       
         <Link to="/LogIn" className="nav-menus2">Log-in</Link> 
         <Link to="/SignIn" className="nav-menus1">Sign-in</Link> 
    </div>
      
   
  )
}

export default Navbar;
