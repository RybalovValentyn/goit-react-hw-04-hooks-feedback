// import { useState, useEffect } from 'react';
import s from "./feedback.module.css"
export default function Feedback({feedbackBtn, handleClick} ) {

    const buttonName = Object.keys(feedbackBtn)

    const btnClasses = [s.buttonitem];
    return (
        <ul className ={s.buttonList}>
        {buttonName.map(name => 
                    <li key={name} >
                    <button className={btnClasses.join(' ')} type='button' name={name} onClick={handleClick}>{name}</button>
                     </li>  )}
           </ul>
    )
}