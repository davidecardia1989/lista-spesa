import "./App.css";
import { login } from "./actions/login";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const stato = useSelector((state) => state);

  const loginFunc = () => {
    dispatch(login('ciaone'));
  };


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={loginFunc}>login</button>
      </header>
    </div>
  );
}

export default App;
