import React, {useState} from "react";
import './ChoseDifficulty.scss'

export const ChoseDifficulty = ({categoryDifficulty, setCategoryDifficulty, handleDificultyChose}) => {

    return (
        <div className='container'>
            <div className='difficulty_box'>
                <h1 className="header">Chose difficulty:</h1>
                <button className="difficulty_button" onClick={() => handleDificultyChose("easy")}>Easy</button>
                <button className="difficulty_button" onClick={() => handleDificultyChose("medium")}>Medium</button>
                <button className="difficulty_button" onClick={() => handleDificultyChose("hard")}>Hard</button>
            </div>
        </div>
    )
}