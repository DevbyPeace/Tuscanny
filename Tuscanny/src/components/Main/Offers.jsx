import woman from "../../assets/section.svg";
import "./Offers.css";

function Offers() {
  return (
    <div className="offers-container">
      <div className="offers">
        <h1> Get Special Offers for Organizations </h1>
        <p>
          Check out our latest offers and discounts! We offer exclusive deals
          for organizations looking to book group tours or events in Tuscany.
          Learn more about our packages and how we can customize your
          experience.
        </p>
        <button>Contact Us</button>
      </div>

      <img src={woman} alt="Special Offers" />
    </div>
  );
}

export default Offers;
