function Card(props){
    const style = {
        border : "solid 1px",
        width : "500px",
        margin : "20px",
        borderRadius : "20px"
    }
    return(
        <div style={style}> 
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
        </div>
    );
}

export default Card;