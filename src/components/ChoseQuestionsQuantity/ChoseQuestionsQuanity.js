import React from "react";
import './ChoseQuestionsQuanity.scss'

export const ChoseQuestionsQuanity = ({handleQuestionQuantity}) => {


    return (
        <div className='container'>
            <div className='quantity_box'>
                    <h1 className="header">Chose questions quantity:</h1>
                    <button className="quantity_button" onClick={() => handleQuestionQuantity(5)}>5</button>
                    <button className="quantity_button" onClick={() => handleQuestionQuantity(10)}>10</button>
                    <button className="quantity_button" onClick={() => handleQuestionQuantity(15)}>15</button>
                    <button className="quantity_button" onClick={() => handleQuestionQuantity(20)}>20</button>
            </div>
        </div>
    )
}