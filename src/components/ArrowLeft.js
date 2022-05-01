import { ArrowLeft as LeftArrow } from "react-bootstrap-icons";

const ArrowLeft = (props) => {
  return (
    <>
      <LeftArrow style={{cursor:"pointer"}} onClick={props.handleClick} color="red" size={50} />
    </>
  );
};

export default ArrowLeft;
