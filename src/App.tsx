import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increment, decrement } from './redux/counter/counterSlice'
import { useAppSelector, useAppDispatch } from './redux/hooks'

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
      <h1>My counter is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increase +1</button>
      <button onClick={() => dispatch(decrement())}>Decrease -1</button>
    </>
  )
}

export default App
