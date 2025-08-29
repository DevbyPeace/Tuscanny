import sliderData from "./sliderData";

// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderComponent.css";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { sliderSettings } from "./settings";

function SliderComponent() {
  return (
    <Swiper {...sliderSettings} modules={[Navigation]} navigation>
      {sliderData.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="card-item">
            <img src={item.image} alt={item.location} />
            <h3>{item.location}</h3>

            <p>
              from <span className="price">€{item.price}</span>
            </p>

            <div className="card-info">
              <span className="schedule">{`${item.schedule.toUpperCase()}`}</span>
              <span>{item.capacity}</span>
            </div>

            <p>{item.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderComponent;
