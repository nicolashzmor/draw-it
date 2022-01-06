import './Button.scss';
import React from 'react';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement>{
    children: string;
    mode?: 'primary' | 'success'
    type?: 'button' | 'submit' | 'reset'
}

const Button = ({mode, children: buttonText, ...props}: ButtonProps) => {
    mode = mode || 'primary';

    return (
            <button {...props} className={`draw-it-button draw-it-button--${mode}`}>
                {buttonText}
            </button>
    );
};

export default Button;
