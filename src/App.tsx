import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { increment, decrement } from './redux/counter/counterSlice'
import { useAppSelector, useAppDispatch } from './redux/hooks'
import Button from 'react-bootstrap/Button';

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Button variant='success'>Test Bootstrap</Button>
      <h1>My counter is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increase +1</button>
      <button onClick={() => dispatch(decrement())}>Decrease -1</button>
    </>
  )
}

export default App
