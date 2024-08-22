import "./App.css";
import Navbar from "./components/header/navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <Home />
      </body>
    </div>
  );
}

export default App;
