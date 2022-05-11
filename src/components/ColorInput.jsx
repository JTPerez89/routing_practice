import React from 'react';
import { useParams } from 'react-router-dom';

const ColorInput = () => {
    const {inputParam, colorParam, bgParam} = useParams();
    return (
        <div>
            {isNaN(+inputParam)?
            <div>
                <p style={{color: colorParam? colorParam: 'none', backgroundColor: bgParam? bgParam: 'none'}}>The word is: {inputParam}</p>
            </div>:
            <div>
                <p style={{color: colorParam? colorParam: 'none', backgroundColor: bgParam? bgParam: 'none'}}>The number is: {inputParam}</p>
            </div>
            }
        </div>
    )
}

export default ColorInput;