import React from 'react';

const Input = ({type,name,src,placeholder, value, register = null, validation, error, disabled}) => {
    return (
        <div className={"relative my-4 w-full min-w-[250px]"}>
            <div className="absolute top-[50%] translate-y-[-50%] left-4">
                <img className={'w-full'} src={src} alt=""/>
            </div>
            <input className={`${error ? 'focus:ring-red-200 focus:border-red-400 ring-red-200 border-red-400' : 'focus:border-[#374047] focus:ring-1 focus:outline-none focus:border-blue-400'} ${disabled ? 'text-gray-400' : ' '} w-full  font-light text-sm border border-gray-200 pl-[40px] pr-[10px] py-[10px] rounded-xl placeholder:text-sm placeholder:font-light  focus:ring-0 focus:outline-none focus:border-1 focus:border-gray-200 duration-300 `}
                   type={type} name={name} placeholder={placeholder} defaultValue={value} disabled={disabled}
                    {...register(name,  validation )}
            />
        </div>
    );
};

export default Input;
