import "./App.css";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import { Routes, Route } from "react-router-dom";
import Crew from "./Pages/Crew";
import Tech from "./Pages/Tech";
import Layout from "./Design/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Tech />} />
      </Route>
    </Routes>
  );
}

export default App;
