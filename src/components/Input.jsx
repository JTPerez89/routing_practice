import React from 'react';
import { useParams } from 'react-router-dom';

const Input = () => {
    const {inputParam} = useParams();
    return (
        <div>
            {isNaN(+inputParam)?
            <div>
                <p>The word is: {inputParam}</p>
            </div>:
            <div>
                <p>The number is: {inputParam}</p>
            </div>
            }
        </div>
    )
}

export default Input;