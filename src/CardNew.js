// import LabelNew from "./LabelNew.js"
import SquareNew1 from "./SquareNew1.js"
import SquareNew2 from "./SquareNew2.js"
export default function CardNew(props){
    const cardstyle = {
        width: '250px',
        height: '200px',
        display: 'flex',
        border: 'solid 3px',
        borderColor: props.borderColor,
        padding: '10px'
    }
    // const bgColor = props.children;
    // const bgColor1 = props.children;
    return (
        <div className="cardNew" style={cardstyle}>
        <SquareNew1 bgColor={props.bgColor}></SquareNew1> 
        <SquareNew2 bgColor1={props.bgColor1}></SquareNew2>
        {/* <Reactangle content="" textPos="" bgColor=""></Reactangle> */}
        </div>
    )
}