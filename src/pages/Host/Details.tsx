import { useOutletContext } from "react-router-dom";

const Details = () => {
  const { van } = useOutletContext();

  return (
    <div>
      <h2>Details here</h2>
      <h4>{van?.name}</h4>
    </div>
  );
};

export default Details;
