import "./Home.css"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer";

function Home() {
  return (
    <div>
    <div className="home-container">
       <Navbar/>
       <h1 className="main-heading3">MULTITASKER</h1>
       {/* <h1 className="main-heading1">CHOOSE YOUR TASK TO DO 👇</h1> */}
       
      
      <div className="card-container">
         <div className="card">Score Reader
         <img src="" alt=""></img>
         < Link to="/ScoreReader"> <button className="btn-1">Go⏩ </button> </Link> 
         
         </div>
         <div className="card1">To-do-list 
         <img src="" alt=""></img>
         < Link to="/ToDoList"> <button className="btn-1">Go⏩ </button> </Link> 
        
         </div>
         <div className="card2">Temperature Convertor
         <img src="" alt=""></img>
         < Link to="/TemperatureConvertor"> <button className="btn-1">Go⏩ </button> </Link> 
      
         </div>
         <div className="card3">Calculator
         <img src="" alt=""></img>
         < Link to="/Calculator"> <button className="btn-1">Go⏩ </button> </Link> 
        
         </div>
         </div>  
      <div className="card-container">  
         <div className="card4">Area Calculator
         <img src="" alt=""></img>
         < Link to="/AreaCalculator"> <button className="btn-1">Go⏩ </button> </Link> 
       
         </div>
         <div className="card5">Random Image Genrator
         <img src="" alt=""></img>
         < Link to="/ImageGenerator"> <button className="btn-1">Go⏩ </button> </Link> 
        
         </div>
         <div className="card6">Intrest Calculator
         <img src="" alt=""></img>
         < Link to="/IntrestCalculator"> <button className="btn-1">Go⏩ </button> </Link> 
         
          </div>
         <div className="card7">Quotes Generator
         <img src="" alt=""></img>
         < Link to="/QuotesGenerator"> <button className="btn-1">Go⏩ </button> </Link> 
        
         </div>
        
    </div>
    <Footer/>
    </div>
    </div>
  )
}

export default Home ;
