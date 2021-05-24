import React from "react";
import './Questionaire.scss'


export const Questionaire = ({showAnswers,handleAnswer, data: {question, correct_answer, incorrect_answers}}) => {


    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);


    return (
        <>


            <div className="question_box">
                <h1 className="question_box_description" dangerouslySetInnerHTML={{__html: question}}/>
            </div>
            <div className="answer">
                {shuffledAnswers.map((answer,idx ) => {

                    return(

                        <button className= "answer_box" key= {idx} onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{__html: answer}}/>
                        // <button className={`${correct_answer === answer ? "answer_box answer_box_correct" : "answer_box"}`} onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{__html: answer}}/>

                    );})}
            </div>
        </>
    )
}