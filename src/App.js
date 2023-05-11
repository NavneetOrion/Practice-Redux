import {useSelector,useDispatch} from 'react-redux'


function App() {
  const multiply = useSelector((state)=>state.multiply) 
  const dispatch = useDispatch();

  const Multiply2 = () =>{
    dispatch({type:'Mul2'})

  }

  const Multiply5 = () =>{
    dispatch({type:'Mul5'})

  }
  return (
    <div>
    <h1>Multiplier</h1>
    <h2>{multiply}</h2>
    <button onClick={Multiply2}>Multiply by 2</button>
    <button onClick={Multiply5}>Multiply by 5</button>
    </div>
  );
}

export default App;
