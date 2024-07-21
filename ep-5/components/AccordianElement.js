const AccordianElement = (props) => {
  const { content, heading, open } = props;
  return (
    <>
      <div className="accordian">
        <h2>{heading}</h2>
        <input type="checkbox" />
        {open && <p>{content}</p>}
      </div>
    </>
  );
};

export default AccordianElement;
