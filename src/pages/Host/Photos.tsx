import { useOutletContext } from "react-router-dom";

const Photos = () => {
  const { van } = useOutletContext();
  return (
    <div>
      <h1>Photos here</h1>
      <img src={van.imageUrl} alt="" />
    </div>
  );
};

export default Photos;
