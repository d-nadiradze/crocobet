import React from 'react';

const Button = ({className, children, onClick, disabled}) => {
    return (
        <button onClick={onClick} disabled={disabled}
                className={ className + ` ${disabled ? 'bg-opacity-30 cursor-default' : ''}  w-full bg-customBlue text-white text-center cursor-pointer py-[12px] px-[90px] rounded-xl mt-4 duration-300`}
        >
            { children }
        </button>
    );
};

export default Button;
