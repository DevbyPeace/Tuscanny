import MainHeader from "./MainHeader";
import SliderComponent from "./SliderComponent";
import Summary from "./Summary";
import Offers from "./Offers";
import PackContainer from "./PackContainer";

import "./Main.css";

function Main() {
  return (
    <section className="main-content">
      <MainHeader />
      <SliderComponent />
      <Summary />
      <Offers />
      <PackContainer />
    </section>
  );
}

export default Main;
