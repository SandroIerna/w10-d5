import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PageNavbar from "./components/PageNavbar";
import PageFooter from "./components/PageFooter";
import Favourites from "./components/Favourites";

function App() {
  return (
    <div>
      <BrowserRouter>
        <PageNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
        </Routes>
        <PageFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
