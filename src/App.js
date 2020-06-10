import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch} from "react-redux"
import Children from './components/Children'

function App() {
  let [color, setColor] = useState("");
  let count = useSelector(state => state.count)
  let box = useSelector(state => state.box)
  let dispatch = useDispatch();

  const handle = (e) => {
    e.preventDefault();
    dispatch({type: "change-color", payload: color})
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch({type:"+"})}>Increment</button>
      <button onClick={() => dispatch({type:"-"})}>Decrement</button>
      <button onClick={() => dispatch({type:"reset"})}>Reset</button>
      <form style={{display: "inline"}} onSubmit={(e) => handle(e)}>
        <input type="text" placeholder="Enter the color" value={color} onChange={(e) => setColor(e.target.value)}></input>
      </form>
      {box.map((item, index) => {
        console.log(item)
        return <Children key={index} index={index} color={item}></Children>
      })}
    </div>
  );
}

export default App;
