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


export default Nav;