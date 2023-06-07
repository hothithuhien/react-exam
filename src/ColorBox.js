export default function DistanceComponent({color, children}) {
  const boxStyle = {
    backgroundColor: color,
    width: '50px',
    height: '50px',
    display: 'flex',
    color: 'black',
    fontWeight: 'bold',
    margin: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Times New Roman',
  };

  return (     
        <div style={boxStyle}>{children}</div>    
      );
}