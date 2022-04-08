import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import QuizScreen from "./pages/QuizScreen";
import ResultsScreen from "./pages/ResultsScreen";

function App() {
  return (
    <div className="my-20">
      <Router>
        <Routes>
          <Route exact path="/quiz" element={<QuizScreen />} />
          <Route exact path="/results" element={<ResultsScreen />} />
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
