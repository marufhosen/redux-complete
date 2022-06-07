import "./App.css";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";

function App() {
  return (
    <div className="App">
      <p className="font-bold text-center m-4 text-3xl">Practicing REDUX</p>
      <Counter />
      <FetchData />
    </div>
  );
}

export default App;
