import Answer from "./Answer";
import { useState } from "react";

const Question = (props) => {

    const [answer, setAnswer] = useState([...props.data.incorrect_answers,props.data.correct_answer].sort(() => Math.random() - 0.5))

    const answerElements = (answer.map(answer =>{
        return <Answer
        correctAnswer = {props.answer}
        endGame={props.endGame}
        value={answer} 
        id={answer} 
        key={answer} 
        answerChoosen={(event) => props.handleChange(answer,event)}
        isHighlighted={props.userAnswer === answer}
        />
    })) 

    return(
        <div className="question">
            <h1>{props.question.replaceAll("&quot;","''").replaceAll("&#039;s","'s").replaceAll('&#039;',"'").replaceAll("&amp;", "&").replaceAll("&eacute;","é")}</h1>
            {answerElements}
        </div>
    )
}

export default Question