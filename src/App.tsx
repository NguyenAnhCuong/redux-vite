import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { decrement, increment } from "./redux/counter/counter.slice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  // const count = useSelector((state: RootState) => state.count);
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.count);

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
      <h1>Count = {count.value}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increase +1
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrease -1
      </button>
    </>
  );
}

export default App;
