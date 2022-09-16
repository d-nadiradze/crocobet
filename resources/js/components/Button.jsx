import React from 'react';

const Button = ({className, children}) => {
    return (
        <div className={ className + " bg-customBlue text-white text-center cursor-pointer py-[12px] px-[90px] rounded-xl mt-4"}>
            { children }
        </div>
    );
};

export default Button;
