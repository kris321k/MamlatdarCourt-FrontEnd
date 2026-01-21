import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About Us</Link>
      <Link to="/register">Register</Link>
      <Link to="/help">Help</Link>
      <Link to="/contact">Contact us</Link>
    </nav>
  );
};

export default Navbar;