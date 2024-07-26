const ContentBox = (props) => {
  const data = props.content;
  return (
    <>
      <div className="content__box">
        <img
          src={data?.images[0]}
          alt={data.title}
          className="content__image"
        />
        <h3 className="content__title">{data.title}</h3>
        <h4 className="content__price">{`$ ${data.price}`}</h4>
      </div>
    </>
  );
};

export default ContentBox;
