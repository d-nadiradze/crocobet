import React from 'react';
import Input from "../Input";

const Header = () => {
    return (
        <div className="flex justify-between max-w-[1160px] mx-auto mt-[60px] items-center px-[20px]">
            <div className="text-4xl font-[600]">
                Users
            </div>
            <div className="">
                <Input type={'text'} name={'filter'} src={'./images/search.svg'} placeholder={'Type to filter the table...'}/>
            </div>
        </div>
    );
};

export default Header;
