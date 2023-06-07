export default function Circle(props) {
  const colors = ['red', 'green', 'blue', 'pink'];

  const circleStyle = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    border: '1px solid red'
  };

  const renderCircle = () => {
    return colors.map((color, index) => (
      <div
        key={index}
        style={{
          ...circleStyle,
          backgroundColor: color
        }}
      ></div>
    ));
  };

  return (
    <div className="componentEx1">
      {renderCircle()}
    </div>
  );
}