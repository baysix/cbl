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
import Header from "./component/header";

//뉴스 크롤링 페이지
// import Society from "./pages/Main/News/Society";
// import Sports from "./pages/Main/News/Sports";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/cbl/society" />} />
          <Route path="/cbl" element={<Navigate to="/cbl/society" />} />

          {/* 사회 */}
          <Route path="/cbl/society" element={<MainPage />} />
          <Route path="/cbl/society/:id" element={<DetailPage />} />

          {/* 스포츠 */}
          <Route path="/cbl/sports" element={<MainPage />} />
          <Route path="/cbl/sports/:id" element={<DetailPage />} />

          {/* 연예 */}
          <Route path="/cbl/entertain" element={<MainPage />} />
          <Route path="/cbl/entertain/:id" element={<DetailPage />} />

          {/* 세계 */}
          <Route path="/cbl/word" element={<MainPage />} />
          <Route path="/cbl/word/:id" element={<DetailPage />} />

          <Route to="/404" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
