function Nav(props){
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#ffbb33",
        margin: "20px 0"
    }
    return(
        <nav style={bag} ClassName = "main-nav">
            <ul>
                <li>{props.first}</li>
                <li>{props.first}</li>
                <li>{props.first}</li>
                <li>{props.first}</li>
            </ul>
        </nav>
    )
}


function Example2() {
    return (
        <div className="heading">
            <h1>Here's a random number from 0 to 10: 
                { Math.floor(Math.random() * 10) + 1 }
            </h1>
        </div>
    );
};



export default Nav;