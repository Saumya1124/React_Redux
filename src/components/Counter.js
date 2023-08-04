import { counterActions } from '../store';
import classes from './Counter.module.css';
import { useSelector , useDispatch} from 'react-redux';

const Counter = () => {

  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter.counter) ;

  const show = useSelector(state => state.counter.showCounter)

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const incrementHandler5 = () => {
    dispatch(counterActions.increment5(5))
  }

  const decrementHandler5 = () => {
    dispatch(counterActions.decrement5(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      
      {show && <div className={classes.value}>{counter}</div>}
      <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
          <button onClick={incrementHandler5}>Increment By 5</button>
          <button onClick={decrementHandler5}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
