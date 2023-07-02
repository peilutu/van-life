import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VanDetails = () => {
  const { id } = useParams();

  const [van, setVan] = useState(null);

  useEffect(() => {
    getVan();
  }, [id]);

  const getVan = () => {
    fetch(`http://localhost:3000/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVan(data);
      });
  };

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="vanDetains">
          <img src={van.imageUrl} width={400} alt="" />
          <div className="van-description">
            <h3>{van.name}</h3>
            <p>${van.price} per day</p>
            <i>{van.type}</i>)
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default VanDetails;
