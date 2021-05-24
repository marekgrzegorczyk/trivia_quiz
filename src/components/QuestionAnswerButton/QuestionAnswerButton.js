import React from "react";
import './QuestionAnswerButton.scss'

const handleAnswer = () => {
    // checking answer

}


export const QuestionAnswerButton = ({data: {correct_answer, incorrect_answers}}) => {

    const answers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);

    return (
        <>
            {answers.map(answer => (
                <button onClick={handleAnswer}

                        className={correct_answer === answer ? "answer_box answer_box_correct" : "answer_box answer_box_incorrect"}>{answers[0]}</button>

            ))};







            <button onClick={handleAnswer}
                    className={correct_answer === answers[0] ? "answer_box answer_box_correct" : "answer_box answer_box_incorrect"}>{answers[0]}</button>
            <button onClick={handleAnswer}
                    className={correct_answer === answers[1] ? "answer_box answer_box_correct" : "answer_box answer_box_incorrect"}>{answers[1]}</button>
            <button onClick={handleAnswer}
                    className={correct_answer === answers[2] ? "answer_box answer_box_correct" : "answer_box answer_box_incorrect"}>{answers[2]}</button>
            <button onClick={handleAnswer}
                    className={correct_answer === answers[3] ? "answer_box answer_box_correct" : "answer_box answer_box_incorrect"}>{answers[3]}</button>
        </>
    )
}
