export default function SquareNew1(props){
    const square1style = {
        width: '200px',
        backgroundColor: props.bgColor,
        position: 'relative'
    }
    const ptext = {
        position: 'absolute',
        textAlign: 'right',
        justifyContent: 'right',
        alignItems:  'right',
    }
    return (
        <div className="SquareNew1" style={square1style}>
           <p style={ptext}>Text</p>
        </div>

        
    )
}