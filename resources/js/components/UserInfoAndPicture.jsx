import React from 'react';
import Button from "./Button";

const UserInfoAndPicture = () => {
    return (
        <div className="border-b border-gray-200">
            <div className="flex space-x-4 ">
                <div className="p-[16px] border border-gray-200 rounded-full relative">
                    <img src="./images/profilePic.svg" alt=""/>
                    <div className="bg-gray-300 p-[6px] rounded-full absolute bottom-0 right-[-5px]">
                        <img src="./images/pencil.svg" alt=""/>
                    </div>
                </div>
                <div className="mt-1">
                    <div className="flex space-x-2">
                        <div className="">Danniel Blicham</div>
                        <img src="./images/key.svg" alt=""/>
                    </div>
                    <div className="text-sm font-light opacity-60">danniel.blicham@gmail.com</div>
                </div>
            </div>
            <Button className={"bg-customBlue bg-opacity-20 text-customBlue"}>
                Resend the invite
            </Button>
        </div>
    );
};

export default UserInfoAndPicture;
