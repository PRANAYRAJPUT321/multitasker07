import { BrowserRouter ,Routes,Route } from "react-router-dom";
import "./App.css"

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import LogIn from "./LogIn";
import SignIn from "./SignIn";
import ScoreReader from "./ScoreReader";
import ToDoList from "./ToDoList"
import TemperatureConvertor from "./TemperatureConvertor"
import Calculator from "./Calculator"
import AreaCalculator from "./AreaCalculator"
import ImageGenerator from "./ImageGenerator"
import IntrestCalculator from "./IntrestCalculator"
import QuotesGenerator from "./QuotesGenerator"
import Footer from "./Footer";
function App() {
  return(
  <> 
  <BrowserRouter>
  <Routes>
    <Route path="/" element={< Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/SignIn" element={<SignIn/>}/>
    <Route path="/LogIn" element={<LogIn/>}/>
    <Route path="/ScoreReader" element={<ScoreReader/>}/>
    <Route path="ToDoList" element={<ToDoList/>}/>
    <Route path="TemperatureConvertor" element={<TemperatureConvertor/>}/>
    <Route path="Calculator" element={<Calculator/>}/>
    <Route path="AreaCalculator" element={<AreaCalculator/>}/>
    <Route path="ImageGenerator" element={<ImageGenerator/>}/>
    <Route path="IntrestCalculator" element={<IntrestCalculator/>}/>
    <Route path="QuotesGenerator" element={<QuotesGenerator/>}/>
    <Route path="Footer" element={<Footer/>}/>
  </Routes>

  </BrowserRouter>
   </>
  )
}

export default App;
