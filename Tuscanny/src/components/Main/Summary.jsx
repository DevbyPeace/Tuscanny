import about from "../../assets/about.svg";
import "./Summary.css";

function Summary() {
  return (
    <section className="summary">
      <img src={about} alt="aboutpic" />

      <div className="overlay">
        <p>WELCOME TO OUR SITE</p>
        <h1>We are the best company for your visit</h1>
        <p>
          After decades of experience, and a whole life in Lucca, we offer you
          the most complete tourism service in the city. In addition to having
          bikes and rickshaws to have as much fun as you want, you have the
          choice of tour guides with whom to and drivers for your every need! We
          offer packages in the way that you get the most at the lowest price.
          Book with us and we will always be available for you!
        </p>

        <div className="stats">
          <div>
            <span>20+</span>
            <p>
              Years <br /> Experience{" "}
            </p>
          </div>
          <div>
            <span> 100+</span>
            <p>
              Happy <br /> Customers
            </p>
          </div>
          <div>
            <span> 150+</span>
            <p>
              Choice
              <br /> of Services
            </p>
          </div>
          <div>
            <span> 10+</span>
            <p>
              Professional <br /> Guides
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Summary;
