import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
        doloremque qui maxime! Unde incidunt error nihil adipisci blanditiis,
        repudiandae officia!
      </p>
      <Link to={"/vans"} style={{ backgroundColor: "rgb(223, 153, 61)" }}>
        Find your van
      </Link>
      <p></p>
    </div>
  );
};

export default Home;
