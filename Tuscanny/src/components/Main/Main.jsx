import MainHeader from "./MainHeader";
import SliderComponent from "./SliderComponent";
import Summary from "./Summary";
import "./Main.css";
import Offers from "./Offers";

function Main() {
  return (
    <section className="main-content">
      <MainHeader />
      <SliderComponent />
      <Summary/>
      <Offers/>
    </section>
  );
}

export default Main;
