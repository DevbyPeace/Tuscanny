import PackItem from "./PackItem";
import img1 from "../../assets/pack1.svg";
import img2 from "../../assets/pack2.svg";
import img3 from "../../assets/pack3.svg";
import img4 from "../../assets/pack4.svg";
import "./PackContainer.css";

const packs = [img1, img2, img3, img4];

function PackContainer() {
  return (
    <div className="pack-container">
      <PackItem img={img1}>
        <h3>Bike and rickshaw rental</h3>
        <p>Book your quality vehicle quickly for an hour or all day! </p>
      </PackItem>
      <PackItem img={img2}>
        <h3>Guided tour of the countryside</h3>
        <p>
          Live the real Lucchese experience by visiting the suburbs by bike!
        </p>
      </PackItem>
      <PackItem img={img3}>
        <h3>Taxi and NCC service</h3>
        <p>
          Do you need not only a bike but a driver? Then you have found the
          right place!
        </p>
      </PackItem>
      <PackItem img={img4}>
        <h3>Bus Package</h3>
        <p>
          Explore the beautiful Tuscan countryside with our comfortable bus
          tours. Perfect for groups and families!
        </p>
      </PackItem>
    </div>
  );
}

export default PackContainer;
