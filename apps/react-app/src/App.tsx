import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CounterPage from "./counter/CounterPage";
import HomePage from "./home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <h1>React app</h1>
      <nav>
        <ul>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>
      <hr />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
