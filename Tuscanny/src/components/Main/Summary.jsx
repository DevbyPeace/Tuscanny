import about from "../../assets/about.svg";

function Summary() {
  return (
    <section className="summary">
      <img src={about} alt="aboutpic" />

      <div className="overlay">
        <p>WELCOME TO OUR SITE</p>
        <h1>We are the best company for your visit</h1>
        <p>
          After decades of experience, and a whole life in Lucca, we offer you
          the most <br />
          complete tourism service in the city. In addition to having bikes and
          rickshaws to <br /> have as much fun as you want, you have the choise
          of tour guides with whom to <br /> and drivers for your every need! We
          offer packages in the way that you get the <br /> most at the lowest
          price. Book with us and we will always be available for you!
        </p>
      </div>
    </section>
  );
}

export default Summary;
