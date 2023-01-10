import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePages from "./home/HomePage";
import Footer from "./components/footer/Footer";
import SinglePage from "./components/watch/singlePage"

const App = () => {
  return (
    <>
      {" "}
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePages/>} />
          <Route path='/singlepage/:id' element={<SinglePage/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
