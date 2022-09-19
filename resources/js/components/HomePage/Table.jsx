import React, {useContext, useEffect, useState} from 'react';
import InputSwitch from "../InputSwitch";
import {Link, useSearchParams} from "react-router-dom";
import {UserContext} from "../../Contexts/UserContext";
import axios from "axios";
import Pagination from "./pagination";

const Table = ({location, filteredUsers}) => {
    const [users, setUsers, loadUsers, setLoadUsers, message , setMessage] = useContext(UserContext);
    const [userStatus, setUserStatus] = useState("")
    const [sorted, setSorted] = useState({sorted: '' , reversed: true})
    const [searchParams] = useSearchParams();
    const searchResult = searchParams.get("search");

    const [currentPage , setCurrentPage] = useState(1)
    const [usersPerPage , setUsersPerPage] = useState(5)
    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage
    const currentUsers = (filteredUsers.length > 0 ? filteredUsers : users)?.slice(indexOfFirstUser,indexOfLastUser)


    const blockUser = (e, id, status) => {
        let text = (status === "ACTIVE" ?  'block' : 'activate')

        if (window.confirm(`Are you sure you wish to ${text} this user?`)) {
            axios.post('/api/user/changeStatus/' + id, {
                status: status === "BLOCKED" ? 1 : 0
            })
                .then(function (response) {
                    console.log(response);
                    setLoadUsers(!loadUsers)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        setMessage('user successfully updated')
    }

    const sort = (key) => {
        const usersCopy = [...users]
        setSorted({sorted:key ,reversed:!sorted.reversed})

        usersCopy.sort((userA, userB) => {
             if (sorted.reversed === true){
                 return(userA[key].toLowerCase() < userB[key].toLowerCase() ? -1 : 1)
             }

            return  userA[key].toLowerCase() > userB[key].toLowerCase() ? -1 : 1

        })
        setUsers(usersCopy)
    }


    return (
        <div className={'mt-[70px]'}>
            <table className={'mx-auto'} width={'100%'}>
                <thead className={'border-y border-gray-200 w-1/2'}>
                <tr className={''}>
                    <td></td>
                    <td className={'w-[10%]'}>
                        <Link to="/add" state={{background: location}}>
                            <div className="w-[73px] h-[72px] mt-[-50px] mx-auto">
                                <div
                                    className={'flex justify-center items-center border border-gray-200 rounded-full  w-full h-full relative bg-customBlue cursor-pointer'}>
                                    <img className={'mx-auto p-[10px]'} src={"../images/plus.svg"} alt=""/>
                                </div>
                            </div>
                        </Link>
                    </td>
                    <td className={'w-[20%]'} onClick={() => sort('name')}>
                        <div className="flex items-center space-x-2">
                            <span>user</span>
                            { sorted.sorted === 'name'  &&
                                <img className={`${sorted.reversed === true ? 'rotate-180 duration-300' : 'rotate-0 duration-300'}`} src="../images/arrow.svg" alt=""/>
                            }
                        </div>
                    </td>
                    <th className={'w-[10%]'} onClick={() => sort('role')}>
                        <div className="flex items-center space-x-2">
                            <span>role</span>
                            { sorted.sorted === 'role' &&
                                <img className={`${sorted.reversed === true ? 'rotate-180 duration-300' : 'rotate-0 duration-300'}`} src="../images/arrow.svg" alt=""/>
                            }
                        </div>
                    </th>
                    <th className={'w-[10%]'} onClick={() => sort('status')}>
                        <div className="flex items-center space-x-2">
                            <span>status</span>
                            { sorted.sorted === 'status' &&
                                <img className={`${sorted.reversed === true ? 'rotate-180 duration-300' : 'rotate-0 duration-300'}`} src="../images/arrow.svg" alt=""/>
                            }
                        </div>
                    </th>
                    <th className={'w-[10%]'}>action</th>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {users && currentUsers.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td></td>
                                <td>
                                    <div className="w-[48px] h-[48px] mx-auto">
                                        <div
                                            className={'flex justify-center items-center border border-gray-200 rounded-full  w-full h-full relative'}>
                                            <img className={'mx-auto p-[10px]'} src="../images/profilePic.svg" alt=""/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={''}>
                                        <div className="">{user.name}</div>
                                        <div className="text-[14px] font-light">{user.email}</div>
                                    </div>
                                </td>
                                <td className={'text-center'}>{user.role}</td>
                                <td className={'text-center'}>
                                    <form action="">
                                        <InputSwitch onChange={(e) => blockUser(e, user.id, user.status)}
                                                     checked={user?.status === 'ACTIVE' ?? false}
                                                     className={user?.status === 'ACTIVE' ? 'bg-customBlue' : 'bg-gray-300'}/>
                                        <input type="hidden" defaultValue={userStatus}/>
                                    </form>
                                </td>
                                <td>
                                    <div className="flex items-center justify-center space-x-2">
                                        <Link key={index} to={"/edit/" + user.id} state={{background: location}}>
                                            <div className={'cursor-pointer'}>
                                                <img src="../images/setting.svg" alt=""/>
                                            </div>
                                        </Link>
                                        <Link key={index + 1} to={"/delete/" + user.id} state={{background: location}}>
                                            <div className={'cursor-pointer'}>
                                                <img src="../images/delete.svg" alt=""/>
                                            </div>
                                        </Link>
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <Pagination
                setUsersPerPage={setUsersPerPage}
                usersPerPage={usersPerPage}
                setCurrentPage={setCurrentPage}
                totalUsers={filteredUsers?.length > 0 ? filteredUsers?.length : users?.length}
                currentPage={currentPage}/>
        </div>
    );
};

export default Table;
