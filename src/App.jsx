import "./App.css";
import { WordsProvider } from "./context/WordsContext";
import Connections from "./components/pages/Connections";
import NavBar from "./components/molecules/NavBar";

function App() {
  return (
    <WordsProvider>
      <NavBar />
      <div className="container">
        <Connections />
      </div>
    </WordsProvider>
  );
}

export default App;
