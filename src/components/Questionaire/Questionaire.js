import React from "react";
import './Questionaire.scss'


export const Questionaire = ({showAnswers,handleAnswer, currentIndex, data: {question, correct_answer, incorrect_answers}}) => {


    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);


    return (
        <>


            <div className="question_box">
                <p>{currentIndex + 1 }/10</p>
                <h1 className="question_box_description" dangerouslySetInnerHTML={{__html: question}}/>
            </div>
            <div className="answer">
                {shuffledAnswers.map((answer,idx ) => {

                    return(
                        <button className= "answer_box" key= {idx} onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{__html: answer}}/>
                    );})}
            </div>
        </>
    )
}