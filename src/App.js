import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Assessment from "./pages/assessment";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/assessment" element={<Assessment/>} />
      </Routes>
    </>
  );
}

export default App;
