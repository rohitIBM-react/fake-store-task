import { Route, Routes } from "react-router-dom";
import "./App.css"; // Import vanilla CSS
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <div className="app-container">
      <br />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
