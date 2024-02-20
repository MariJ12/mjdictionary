import mweb from "./mweb.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={mweb} className="Mweb-logo img-fluid" alt="mweblogo" />
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
