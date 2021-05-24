import React, {useState, useEffect} from "react";
import './QuestionScreen.scss'
import {Questionaire} from "../Questionaire/Questionaire.js";



export const QuestionsScreen = ({id}) => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)



    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${id}`)
            .then((result) => result.json())
            .then((data) => {
                setQuestions(data.results);
            })

    }, [])

    const handleAnswer = (answer) => {
        setTimeout (()=> {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);

            if (answer === questions[currentIndex].correct_answer) {
                // increase score
                setScore(score + 1);
            }
        },500)

    }
    const handleRetryButton = ()=> {
        // to zmienić
        window.location.reload();
    }


    return questions.length > 0 ? (
        <div className="container">
            {currentIndex >= questions.length ? (
                <h1 className="loading_and_score">

                    Congratulations! <br/><br/>
                    Your score is {score} !
                    <button onClick={handleRetryButton} className="answer_box button_try_again">
                        <p className="button_try_again_text">Click here to try again!</p>
                    </button>
                </h1>
            ) : (
                <Questionaire  currentIndex = {currentIndex}data={questions[currentIndex]}  handleAnswer={handleAnswer}/>
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
