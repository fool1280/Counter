import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Children(props) {
    let [color, setColor] = useState("");
    let dispatch = useDispatch();

    const handle = (e) => {
        e.preventDefault();
        dispatch({type: "change-color-box", payload: {index: props.index, boxColor: color}})
    }

    return (
        <div style={{border: "1px solid black", margin: "15px 40%", height: "100px", backgroundColor: props.color}}>
            <h3>Colorful Box</h3>
            <p>{props.index+1}</p>
            <form onSubmit={(e) => handle(e)}>
                <input type="text" placeholder="Enter the color" value={color} onChange={(e) => setColor(e.target.value)}></input>
            </form>
        </div>
    )
}
