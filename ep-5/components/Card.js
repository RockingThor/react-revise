const Card = (props) => {
  console.log(props);
  const { cloudinaryImageId, name } = props.info;

  return (
    <div className="cardContainer">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
        className="card-image"
      />
      <div className="card-details">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
