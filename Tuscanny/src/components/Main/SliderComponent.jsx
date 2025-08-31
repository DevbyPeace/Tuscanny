import sliderData from "./sliderData";

// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./SliderComponent.css";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import { sliderSettings } from "./settings";

function SliderComponent() {
  return (
    <Swiper
      {...sliderSettings}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true} 
      speed={2000} 
      className="overall-box"
    >
      {/* <SliderButtons /> */}

      {sliderData.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="card-item">
            <img src={item.image} alt={item.location} />

            <div>
              <h4>{item.location}</h4>
            </div>

            <p>
              from <span className="price">€{item.price}</span>
            </p>

            <div className="card-info">
              <span className="schedule">{`${item.schedule.toUpperCase()}`}</span>
              <span>{item.capacity}</span>
            </div>

            <div>
              <p>{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderComponent;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="slider-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt; </button>
    </div>
  );
};

export { SliderButtons };
