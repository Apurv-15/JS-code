import React, {useState} from 'react';
import './App.css';

function App() {
  const sum=1+1;
  const [todos,setData]=useState('');
  const [input,setInput]=useState('');
  return (
    
    <div className="App">
    <h1>hello apurv</h1>
    <input value={input}onChange={event=>setInput(event.target.value)}/>
    {/* <button onClick={()=>setData(data+1)}>update data</button> */}
    <button>Add todo</button>

    <ul>
      {todos.map(todo=>
      {
        <li>{todos}</li>
      })}
    </ul>
    </div>
  );
}

export default App;
