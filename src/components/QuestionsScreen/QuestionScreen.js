import React, {useState, useEffect} from "react";
import './QuestionScreen.scss'
import {Questionaire} from "../Questionaire/Questionaire.js";

export const QuestionsScreen = ({resetGame,categoryChosen, setCategoryChosen, categoryDifficulty, id, questionsQuantity}) => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)


    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&category=${id}&difficulty=${categoryDifficulty}`)
            .then((result) => result.json())
            .then((data) => {
                setQuestions(data.results);
            })

    }, [])

    const handleAnswer = (answer) => {
        setTimeout(() => {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);

            if (answer === questions[currentIndex].correct_answer) {
                // increase score
                setScore(score + 1);
            }
        }, 300)

    }



    return questions.length > 0 ? (
        <div className="container">
            {currentIndex >= questions.length ? (
                <h1 className="loading_and_score">

                    Congratulations! <br/><br/>
                    Your score is {score} !
                    <button onClick={resetGame} className="answer_box button_try_again">
                        <p className="button_try_again_text">Click here to try again!</p>
                    </button>
                </h1>
            ) : (
                <Questionaire questionsQuantity={questionsQuantity} currentIndex={currentIndex}
                              data={questions[currentIndex]} handleAnswer={handleAnswer}/>
            )}
        </div>
    ) : (
        <div className="container">
            <div className="lds-roller">
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    );
}

export default QuestionsScreen;
