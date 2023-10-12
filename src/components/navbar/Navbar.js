import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/"><img src="/logo.webp" height="50px" width="145px"></img></NavLink>
    
      <NavLink to="/cart" ><img src="/cart.png" height="50px" width="70px"></img></NavLink>
    </div>
  );
};

export default Navbar;