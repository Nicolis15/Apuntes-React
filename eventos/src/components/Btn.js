function Btn(){
    let darkModeOn = false;
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is On</h1>

    const click = () => {
        darkModeOn = !darkModeOn;
        if(darkModeOn == true){
            console.log("Dark mode is on")
        }
        else{
            console.log("Light mode is on")
        }
    }
    return(
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick = {click}>
            Click me
            </button>
        </div>
    )
}

export default Btn;