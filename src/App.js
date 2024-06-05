import {Routes , Route , Link } from "react-router";
import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
function App() {
  return (
    <div className="App">
      <h1 style={{color : "black" }}> welcome to react Router</h1> 
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/html"  element={<Html />} />
        <Route path="/css"  element={<Css />} />
      </Routes>
    </div>
  );
}

export default App;
