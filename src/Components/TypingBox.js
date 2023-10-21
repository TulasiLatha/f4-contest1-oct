import React from "react";
import { useState,useEffect } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const TypingBox=()=>{
    const [time, setTime]=useState(15);
    const [score, setScore] = useState(0);
    let displaytext="eat happily low wooden fight me frighten distant solve move being tin improve guard unhappy band east capital noun myself strike thought turn weather scientist canal finger roll move wonder settlers camera traffic honor compass victory whose health vast ought fresh dog successful straw these of cheese simply answer finally";
     let keychar=0;
     useEffect(() => {
        const timerInterval = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
        return () => clearInterval(timerInterval);
  }, []);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
  }

    return (
        <div>
            <div className="row-1">
            <div>{time}</div>
            <div>
                <button onClick={()=>setTime(15)}>15s</button>
                <button onClick={()=>setTime(30)}>30s</button>
                <button onClick={()=>setTime(60)}>60s</button>

            </div>
            <div>
            <p>Score: {score}</p>
            </div>
      
      <button onClick={() => handleAnswer(true)}>True</button>
      <button onClick={() => handleAnswer(false)}>False</button>
</div>
            
            <div className="text-box">
            {displaytext.split("").map((char)=>(<span key={'char'+(keychar++)}>{char}</span>))}
            </div>
        </div>
    )
}
export default TypingBox;