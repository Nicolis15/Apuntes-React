import React from "react";

export default function Fruits(props) {
    return (
        <div>
            {props.fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}


