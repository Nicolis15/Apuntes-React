import { useState } from 'react';

function Btn(){
    let darkModeOn = false;
    const [texto, setText] = useState('Dark Mode is On') 


    const click = () => {
        darkModeOn = !darkModeOn;
        if(darkModeOn){
            setText('Light Mode is On')
        }else{
            setText('Dark Mode is On')
        }
    }
    return(
        <div>
            <h1>{texto}</h1>
            <button onClick = {click}>
            Click me
            </button>
        </div>
    )
}

export default Btn;