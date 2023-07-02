import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    getVans();
  }, []);

  const getVans = () => {
    fetch(`http://localhost:3000/vans`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVans(data);
      });
  };

  return (
    <div>
      <h1>this is the host van page. will have a list of vans below</h1>
      {vans ? (
        vans.map((van) => (
          <Link to={`${van?.id}`} key={van.id}>
            <h5>{van?.name}</h5>
            <img src={van?.imageUrl} alt="" width={100} />
          </Link>
        ))
      ) : (
        <h5>Loading...</h5>
      )}
    </div>
  );
};

export default HostVans;
