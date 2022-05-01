const ImageSlider = ({ data}) => {
  console.log(data);
  return (
    <>
      <img
      className="shadow-lg rounded"
        style={{ height: "400px", width: "300px"}}
        src={data.src}
        alt="img"
      />
    </>
  );
};

export default ImageSlider;
