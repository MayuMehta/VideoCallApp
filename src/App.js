import { Route, Routes, } from "react-router-dom";
import Home from "./Home";
import Room from "./Room";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/room/:roomID" element={<Room />}/>
        <Route path="about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
