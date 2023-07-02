import { Outlet, useParams } from "react-router-dom";
import VansNavbar from "../../components/VansNavbar";
import { useEffect, useState } from "react";

const HostVansDetails = () => {
  const { id } = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data));
  }, []);

  return (
    <div>
      <h1>Host Van Details -{id}-</h1>
      {van ? <img src={van.imageUrl} alt="" width={200} /> : <h2>Loading</h2>}

      <VansNavbar />
      <Outlet context={{ van }} />
    </div>
  );
};

export default HostVansDetails;
