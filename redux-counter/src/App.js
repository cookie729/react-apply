import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { increment, decrement, incrementByAmount } from "./redux/counterSlice"

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [ incrementAmount, setIncrementAmount] = useState(""); 
  return (
    <div className="App">
      <h1>count: {count}</h1>
      <div className="flex">
        <input onChange={(e) => setIncrementAmount(e.target.value)} />
        <button onClick= {() => dispatch(increment())}>+</button>
        <button onClick= {() => dispatch(decrement())}>-</button>
        <button className="addition" onClick= {() => dispatch(incrementByAmount(Number(incrementAmount)))}>追加</button>
      </div>
    </div>
  );
}

export default App;
