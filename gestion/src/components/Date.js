import { useState, useEffect } from 'react';


function Date(){
    const fechaDefault = new Date();
    const hora = fechaDefault
    
    const [fecha,  asignarFecha] = useState('')
    return(
        <h1>{hora}</h1>
    )
}