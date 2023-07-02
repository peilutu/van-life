import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState(null);

  useEffect(() => {
    getVans();
  }, []);

  const getVans = async () => {
    const res = await fetch("http://localhost:3000/vans");
    const data = await res.json();
    console.log(data);
    setVans(data);
  };
  return (
    <div className="vans">
      <h1>Explore our vans</h1>
      <div className="van-list-container">
        {vans ? (
          vans.map((van) => (
            <div key={van.id} className="vanElement">
              <Link to={`/vans/${van.id}`}>
                <>
                  <img src={van.imageUrl} width={200} alt="" />
                  <h3>{van.name}</h3>
                  <p>${van.price}/ day</p>
                  <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </>
              </Link>
            </div>
          ))
        ) : (
          <h5>Loading...</h5>
        )}
      </div>
    </div>
  );
};

export default Vans;
