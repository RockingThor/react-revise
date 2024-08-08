/* eslint-disable react/prop-types */
const MyButton = ({ Icon, functionToCall }) => {
  return (
    <div className="icon__comment" onClick={functionToCall}>
      <Icon />
    </div>
  );
};

export default MyButton;
