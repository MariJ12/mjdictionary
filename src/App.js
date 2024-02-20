import mwebb from "./mwebb.jpg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mwebb} className="Mwebb-logo img-fluid" alt="mwebblogo" />
      </header>
      <a rel="noreferrer" href="/" className="btn btn-primary">
        Hi Gorgeous
      </a>
    </div>
  );
}
