import { ArrowRight as RightArrow } from "react-bootstrap-icons";

const ArrowRight = (props) => {
  return (
    <div>
      <RightArrow style={{cursor:"pointer"}} onClick={props.handleClick} color="red" size={50} />
    </div>
  );
};

export default ArrowRight;
