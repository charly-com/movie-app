import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePages from "./home/HomePage";

const App = () => {
  return (
    <>
      {" "}
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePages/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
