import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./home/HomePage";

const App = () => {
  return (
    <>
      {" "}
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
