import React from 'react';

const Input = ({type,name,src,placeholder}) => {
    return (
        <div className={"relative my-4"}>
            <div className="absolute top-[50%] translate-y-[-50%] left-4">
                <img className={'w-full'} src={src} alt=""/>
            </div>
            <input className={'border border-gray-200 pl-[40px] pr-[100px] py-[10px] rounded-xl placeholder:text-sm placeholder:font-light duration-300 focus:border-[#374047] focus:ring-1 focus:outline-none focus:border-blue-400'} type={type} name={name} placeholder={placeholder}>

            </input>
        </div>
    );
};

export default Input;
