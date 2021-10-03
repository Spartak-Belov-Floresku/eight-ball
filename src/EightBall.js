import { useState } from 'react';
import './EightBall.css'


const EightBall =({guesses}) => {

    const genRandom = () => Math.floor(Math.random()*guesses.length);
    const [guess, getSuggestion] = useState(genRandom());

    const getMessage = (check='default') => {
        if(check != 'default')
            return guesses[guess].msg;
        else
            return 'Think of a Question.';
    }
    const [message, makeMessage] = useState(getMessage);
    
    const getBackground = (check='default') => {
        if(check != 'default')
            return guesses[guess].color;
        else
            return 'green';
    }
    const [background, makeBackground] = useState(getBackground);

     const makeGuess = () =>{
        let check = genRandom();
        getSuggestion(genRandom());
        makeMessage(getMessage(check));
        makeBackground(getBackground(check));
     }

    return (
        <div className="EightBall" style={{backgroundColor:background}}>
            <div className="result" onClick={makeGuess}>{message}</div>
        </div>
    )
}

export default EightBall;