import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

//페이지
import MainPage from "./pages/Main";
import DetailPage from "./pages/detail";
import NotFound from "./pages/error";

//뉴스 크롤링 페이지
// import Society from "./pages/Main/News/Society";
// import Sports from "./pages/Main/News/Sports";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/cbl/society" />} />
        <Route path="/cbl" element={<MainPage />}>
          <Route path=":society" element={<MainPage />} />
          <Route path=":sports" element={<MainPage />} />
        </Route>
        <Route path="/detail" element={<DetailPage />} />
        <Route to="/404" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
