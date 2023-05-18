import "./ScoreReader.css"
import Navbar from "./Navbar";
import {useState} from "react";
function ScoreReader() {
 
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
 
  return(
    <div>
    <Navbar/>
 <div className="container">
  <h1 className="main-heading">SCORE READER </h1>
 <div className="score-card1">
    <h2 className="team-haeding">Team A</h2>
    <h3 className="score">{scoreA}</h3>
    <button className="btn" onClick={()=>{
      setScoreA (scoreA+1)
    }}>
      +
      </button>

    <button className="btn1" onClick={()=>{
      setScoreA (scoreA-1)
    }}>-</button>

  </div>


  <div className="score-card2">
    <h2 className="team-haeding">Team B</h2>
    <h3 className="score">{scoreB}</h3>

    <button className="btn" onClick={()=>{
      setScoreB (scoreB+1)
    }} >+</button>

    <button className="btn1" onClick={()=>{
      setScoreB (scoreB-1)
    }}>-</button>
  </div>


     
     </div>

    </div>
  )
}

export default ScoreReader;
