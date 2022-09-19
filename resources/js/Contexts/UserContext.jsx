import {createContext, useEffect, useState} from 'react';
import axios from "axios";

const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [users, setUsers] = useState(null);
    const [loadUsers, setLoadUsers] = useState(true)

    useEffect(() => {
        const fetchUser = () => {
            axios.get(`/api/user`)
                .then((res) => {
                    setUsers(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        fetchUser()
    }, [loadUsers]);

    return (
        // the Provider gives access to the context to its children
        <UserContext.Provider value={[users, setUsers, loadUsers, setLoadUsers]} >
            {children}
        </UserContext.Provider>
    );
}

export {UserContext, UserContextProvider};
