import "./App.css";
import { WordsProvider } from "./context/WordsContext";
import Connections from "./components/pages/Connections";
import NavBar from "./components/molecules/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addwords from "./components/pages/AddWords";

function App() {
  return (
    <WordsProvider>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Connections />} />
            <Route path="/addwords" element={<Addwords />} />
          </Routes>
        </div>
      </Router>
    </WordsProvider>
  );
}

export default App;
