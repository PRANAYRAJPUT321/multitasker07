import "./Home.css"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"

function Home() {
  return (
    <div>
    <div className="home-container">
       <Navbar/>
       <h1 className="main-heading2">MULTITASKER</h1>
       <h1 className="main-heading1">CHOOSE YOUR TASK TO DO 👇</h1>
       
      
      <div className="card-container">
         <div className="card">Score Reader
  
         < Link to="/ScoreReader"> <button className="btn-1">Go⏩ </button> </Link> 
         
         </div>
         <div className="card">To-do-list 
       
         < Link to="/ToDoList"> <button className="btn-1">Go⏩ </button> </Link> 
        
         </div>
         <div className="card">Temperature Convertor
     
         < Link to="/TemperatureConvertor"> <button className="btn-1">Go⏩ </button> </Link> 
      
         </div>
         <div className="card">Calculator
    
         < Link to="/Calculator"> <button className="btn-1">Go⏩ </button> </Link> 
        
         </div>
         </div>  
      <div className="card-container">  
         <div className="card">Area Calculator
       
         < Link to="/AreaCalculator"> <button className="btn-1">Go⏩ </button> </Link> 
       
         </div>
         <div className="card">Random Image Genrator
      
         < Link to="/ImageGenerator"> <button className="btn-1">Go⏩ </button> </Link> 
        
         </div>
         <div className="card">Intrest Calculator
       
         < Link to="/IntrestCalculator"> <button className="btn-1">Go⏩ </button> </Link> 
         
          </div>
         <div className="card">Quotes Generator
        
         < Link to="/QuotesGenerator"> <button className="btn-1">Go⏩ </button> </Link> 
         
         </div>
    </div>
    </div>
    </div>
  )
}

export default Home ;
