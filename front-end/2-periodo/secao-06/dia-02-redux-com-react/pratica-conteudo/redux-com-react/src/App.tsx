import { useDispatch, useSelector } from 'react-redux';
import { actionCreator, clickCounter } from './redux/actions';
import './App.css';

type RootState = {
  counterReducer: {
    count: number;
    clicks: number;
  }
};

function App() {
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const clicks = useSelector((state: RootState) => state.counterReducer.clicks);
  const dispatch = useDispatch();

  function handleClick(count = 1) {
    dispatch(actionCreator(count));
    dispatch(clickCounter());
  }
  
  return (
    <>
      <h1>Contador</h1>
      <h2>{ count }</h2>
      <h1>Clicks</h1>
      <h2>{ clicks }</h2>
      <button onClick={ () => handleClick() }>Adiciona 1</button>
      <button onClick={ () => handleClick(5) }>Adiciona 5</button>
    </>
  )
}

export default App;
