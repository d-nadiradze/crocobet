import React, {useState} from 'react';
import InputSwitch from "../InputSwitch";
import {Link} from "react-router-dom";

const Table = ({location}) => {
    const [blockAction, setBlockAction] = useState(false)

    const blockUser = (e, id) => {
        setBlockAction(!e)
    }

    return (
        <div className={'mt-[70px]'}>
            <table className={'mx-auto'} width={'100%'} >
                <thead className={'border-y border-gray-200 w-1/2'} >
                    <tr className={''}>
                        <td></td>
                        <td className={'w-[10%]'}>
                            <Link to="/add" state={{ background: location }}>
                                <div className="w-[73px] h-[72px] mt-[-50px] mx-auto">
                                    <div className={'flex justify-center items-center border border-gray-200 rounded-full  w-full h-full relative bg-customBlue cursor-pointer'}>
                                        <img className={'mx-auto p-[10px]'} src="./images/plus.svg" alt=""/>
                                    </div>
                                </div>
                            </Link>
                        </td>
                        <td className={'w-[20%]'}>user</td>
                        <th className={'w-[10%]'}>role</th>
                        <th className={'w-[10%]'}>status</th>
                        <th className={'w-[10%]'}>action</th>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <div className="w-[48px] h-[48px] mx-auto">
                                <div className={'flex justify-center items-center border border-gray-200 rounded-full  w-full h-full relative'}>
                                    <img className={'mx-auto p-[10px]'} src="./images/profilePic.svg" alt=""/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={''}>
                                <div className="">Daniel Blichman</div>
                                <div className="text-[14px] font-light">daniel.blichmann@gmail.com</div>
                            </div>
                        </td>
                        <td className={'text-center'}>Admin</td>
                        <td className={'text-center'}>
                            <InputSwitch onChange={(e) => blockUser(e, 1, 'feedback')}
                                         checked={true}
                                         className={true ? 'bg-customBlue' : 'bg-gray-300'}/>
                        </td>
                        <td>
                            <div className="flex items-center justify-center space-x-2">
                                <div className={'cursor-pointer'}>
                                    <img src="./images/setting.svg" alt=""/>
                                </div>
                                <div className={'cursor-pointer'}>
                                    <img src="./images/delete.svg" alt=""/>
                                </div>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <div className="w-[48px] h-[48px] mx-auto">
                                <div className={'flex justify-center items-center border border-gray-200 rounded-full  w-full h-full relative'}>
                                    <img className={'mx-auto p-[10px]'} src="./images/profilePic.svg" alt=""/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={''}>
                                <div className="">Daniel Blichman</div>
                                <div className="text-[14px] font-light">daniel.blichmann@gmail.com</div>
                            </div>
                        </td>
                        <td className={'text-center'}>Admin</td>
                        <td className={'text-center'}>
                            <InputSwitch onChange={(e) => blockUser(e, 1, 'feedback')}
                                         checked={true}
                                         className={true ? 'bg-customBlue' : 'bg-gray-300'}/>
                        </td>
                        <td>
                            <div className="flex items-center justify-center space-x-2">
                                <div className={'cursor-pointer'}>
                                    <img src="./images/setting.svg" alt=""/>
                                </div>
                                <div className={'cursor-pointer'}>
                                    <img src="./images/delete.svg" alt=""/>
                                </div>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <div className="w-[48px] h-[48px] mx-auto">
                                <div className={'flex justify-center items-center border border-gray-200 rounded-full  w-full h-full relative'}>
                                    <img className={'mx-auto p-[10px]'} src="./images/profilePic.svg" alt=""/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={''}>
                                <div className="">Daniel Blichman</div>
                                <div className="text-[14px] font-light">daniel.blichmann@gmail.com</div>
                            </div>
                        </td>
                        <td className={'text-center'}>Admin</td>
                        <td className={'text-center'}>
                            <InputSwitch onChange={(e) => blockUser(e, 1, 'feedback')}
                                         checked={true}
                                         className={true ? 'bg-customBlue' : 'bg-gray-300'}/>
                        </td>
                        <td>
                            <div className="flex items-center justify-center space-x-2">
                                <div className={'cursor-pointer'}>
                                    <img src="./images/setting.svg" alt=""/>
                                </div>
                                <div className={'cursor-pointer'}>
                                    <img src="./images/delete.svg" alt=""/>
                                </div>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <div className="w-[48px] h-[48px] mx-auto">
                                <div className={'flex justify-center items-center border border-gray-200 rounded-full  w-full h-full relative'}>
                                    <img className={'mx-auto p-[10px]'} src="./images/profilePic.svg" alt=""/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={''}>
                                <div className="">Daniel Blichman</div>
                                <div className="text-[14px] font-light">daniel.blichmann@gmail.com</div>
                            </div>
                        </td>
                        <td className={'text-center'}>Admin</td>
                        <td className={'text-center'}>
                            <InputSwitch onChange={(e) => blockUser(e, 1, 'feedback')}
                                         checked={true}
                                         className={true ? 'bg-customBlue' : 'bg-gray-300'}/>
                        </td>
                        <td>
                            <div className="flex items-center justify-center space-x-2">
                                <div className={'cursor-pointer'}>
                                    <img src="./images/setting.svg" alt=""/>
                                </div>
                                <div className={'cursor-pointer'}>
                                    <img src="./images/delete.svg" alt=""/>
                                </div>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <div className="w-[48px] h-[48px] mx-auto">
                                <div className={'flex justify-center items-center border border-gray-200 rounded-full  w-full h-full relative'}>
                                    <img className={'mx-auto p-[10px]'} src="./images/profilePic.svg" alt=""/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={''}>
                                <div className="">Daniel Blichman</div>
                                <div className="text-[14px] font-light">daniel.blichmann@gmail.com</div>
                            </div>
                        </td>
                        <td className={'text-center'}>Admin</td>
                        <td className={'text-center'}>
                            <InputSwitch onChange={(e) => blockUser(e, 1, 'feedback')}
                                         checked={true}
                                         className={true ? 'bg-customBlue' : 'bg-gray-300'}/>
                        </td>
                        <td>
                            <div className="flex items-center justify-center space-x-2">
                                <Link key={1} to="/edit" state={{ background: location }}>
                                    <div className={'cursor-pointer'}>
                                        <img src="./images/setting.svg" alt=""/>
                                    </div>
                                </Link>
                                <Link key={2} to="/delete" state={{ background: location }}>
                                    <div className={'cursor-pointer'}>
                                        <img src="./images/delete.svg" alt=""/>
                                    </div>
                                </Link>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
