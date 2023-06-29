import van from "/van.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about">
      <img src={van} alt="van pic" className="about-hero-image" />

      <div className="about-page-content">
        <h1>Don't squeeze in a sedan when you could relax in a van!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni impedit
          debitis cupiditate harum provident dicta alias quisquam quo earum ut.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          veritatis iusto sed ad dolores beatae illo, non quos alias. Obcaecati
          deserunt at quisquam cupiditate id voluptate ut atque soluta
          voluptatem sunt. Magni sapiente harum natus voluptatem tempore,
          quisquam incidunt autem.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          Your destination is waiting. <br /> Your van is ready.
        </h2>
        <Link className="link-button" to="/vans">
          Explore you vans
        </Link>
      </div>
    </div>
  );
};

export default About;
