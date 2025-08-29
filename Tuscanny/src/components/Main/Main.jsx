import MainHeader from "./MainHeader";
import SliderComponent from "./SliderComponent";
import Summary from "./Summary";
import "./Main.css";

function Main() {
  return (
    <section className="main-content">
    <div className="r-container">
        <MainHeader />
      <SliderComponent />
    </div>
    
    </section>
  );
}

export default Main;
