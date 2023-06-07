export default function DistanceComponent ({speed, time, children}) {
    return (
        <div className="">
        Distance: {speed*time}
        <div>{children}</div>
        {/* <hr/>
        <h1>Time</h1>
        <input type="submit"/> */}
        </div>
      );
}