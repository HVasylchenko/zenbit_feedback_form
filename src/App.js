import About from "./components/About";

import Error from "./components/Error";
import Header from "./components/Header";
import Userform from "./components/Userform";
import Footer from "./components/Footer";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="container">
       <Router>
        <Header />   
        {/* SPA */}
        <Routes>
          <Route exact path="/" element={<Userform/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/userform" element={<Userform/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
