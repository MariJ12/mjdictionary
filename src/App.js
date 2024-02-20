import mwebb from "./mwebb.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={mwebb} className="Mwebb-logo img-fluid" alt="mwebblogo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>Coded by MJ</small>
        </footer>
      </div>
    </div>
  );
}
