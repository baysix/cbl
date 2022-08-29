import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//페이지
import MainPage from "./pages/main";
import NotFound from "./pages/error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cbl" element={<MainPage />} />
        <Route to="/404" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
