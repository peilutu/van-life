import { useOutletContext } from "react-router-dom";

const Pricing = () => {
  const { van } = useOutletContext();
  return (
    <div>
      <h5>${van.price}</h5>
    </div>
  );
};

export default Pricing;
