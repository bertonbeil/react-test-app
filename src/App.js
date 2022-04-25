import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import TestPage from "./TestPage";
import TestPage2 from "./TestPage2";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
      <Link to="/test2">Test2</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/test2" element={<TestPage2 />} />
      </Routes>
    </div>
  );
}

export default App;
