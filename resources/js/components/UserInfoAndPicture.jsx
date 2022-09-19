import React from 'react';
import Button from "./Button";

const UserInfoAndPicture = ({name, email, blocked}) => {
    return (
        <div className={`border-b border-gray-200 pb-4 ${!blocked ? 'text-gray-400' : ''} duration-300`}>
            <div className="flex space-x-4 ">
                <div className="p-[16px] border border-gray-200 rounded-full relative">
                    <img src="../images/profilePic.svg" alt=""/>
                    <div className="bg-gray-300 p-[6px] rounded-full absolute bottom-0 right-[-5px]">
                        <img src="../images/pencil.svg" alt=""/>
                    </div>
                </div>
                <div className="mt-1">
                    <div className="flex space-x-2">
                        <div className="">{name}</div>
                        <img src="../images/key.svg" alt=""/>
                    </div>
                    <div className="text-sm font-light opacity-60">{email}</div>
                </div>
            </div>
            {
                blocked &&
                <Button className={`${blocked ? 'animate-appear' : 'animate-dissepear'} bg-customBlue bg-opacity-20 text-customBlue`}>
                    Resend the invite
                </Button>
            }
        </div>
    );
};

export default UserInfoAndPicture;
