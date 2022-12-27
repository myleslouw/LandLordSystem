import React, { createContext, useState, useEffect } from "react";
import Axios from 'axios'

// create context
const AllUsersContext = createContext({});

const AllUsersContextProvider = ({ children }) => {
    // the value that will be given to the context
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        Axios.get('http://localhost:3001/fetchusers').then((response) => {
            setUsers(response.data);
        })
    }

    //gets the userdata from the database
    useEffect(() => {
        getUsers()
        console.log("Rendered")
    }, [])

    return (
        // the Provider gives access to the context to its children
        <AllUsersContext.Provider value={{ users, setUsers }}>
            {children}
        </AllUsersContext.Provider>
    );
};

export { AllUsersContext, AllUsersContextProvider };