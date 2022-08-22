import { useEffect, useState } from "react"
import Question from "./Question";

export default function Game(){
    const [questions, setQuestions] = useState({});
    const [reset, setReset] = useState({});
    const [end, setEnd]  =useState(false);
    const [score, setScore]=useState(0);
    const [userAnswers, setUserAnswers]=useState([]);

    useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5")
        .then(res=>res.json())
        .then(data=>setQuestions(data.results))
    },[reset])
    

    function restartGame(){
        setEnd(false)
        setUserAnswers({})
        setReset({})
        setScore(0)
        setQuestions({})
    }

    const handleChange = (answer, id)=>{
        if(end)
            return;
        setUserAnswers({...userAnswers, [id]: answer});
    }

    function checkScore(){
        setEnd(true);
        const marked = (Object.values(userAnswers))
        const correct = [];
        for(let i=0; i<questions.length; i++){
            correct.push(questions[i].correct_answer)
        }
        for(let i=0;i<correct.length;i++){
            if(correct.includes(marked[i])){
                setScore(prevScore=>prevScore+1)
            }
        }
    }

    return(
        <div className="game--container">
            {
                questions.length > 0
                ? Object.values(questions).map(q => 
                <Question
                    endGame={end}
                    userAnswer={userAnswers[q.question]}
                    answer={q.correct_answer} 
                    id={q.question}
                    handleChange={(answer) => handleChange(answer, q.question)}
                    question={q.question} 
                    key={q.question} 
                    data={q}>
                </Question>)
                : 'Waiting for questions...   '
            }
            {end ? <><h3>You've got {score}/5 points!</h3><button onClick={restartGame} className="checkScore">Play again?</button></> : <button onClick={checkScore} className="checkScore">Check score!</button>}
        </div>
    )
}