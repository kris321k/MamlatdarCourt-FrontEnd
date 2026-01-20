import Navbar from "./Navbar";
import emblem from "../assets/goaEmblem.png";

const Header = () => {
  return (
    <header>
      <div className="gov-logo">
        <img src={emblem} alt="Goa Emblem" />
      </div>

      <div className="title">
        <h1>Mamlatdar Court – Goa</h1>
        <p>Department of Revenue | Government of Goa</p>
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
