import MLogo from "./MLogo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={MLogo} className="MLogo img-fluid" alt="MLogo" />
        </header>
        <div>
          <h1 className="headerH">Dictionary</h1>
        </div>
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
