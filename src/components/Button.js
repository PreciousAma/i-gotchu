import React from 'react';

    const Button = ({buttonAction, buttonText}) => {
        return (
            <>
                <button onClick={buttonAction} className='btn'>{buttonText}</button>
            </>
        )
    }
export default Button    