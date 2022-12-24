import React from 'react'
import { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Axios from 'axios'
import { useEffect } from 'react'
import EditRecordComp from './EditRecordComp'
import UserRecord from './UserRecord'
import { UserDetailsContext } from './userDetailsContext'


const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleEditOpen = () => setShowModal(true);
    const handleEditClose = () => setShowModal(false);



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
        <div className='vh-100 w-auto d-flex justify-content-center align-items-start pt-5 bg-dark'>

            {/* {showModal &&
                <EditRecordComp
                    showModal={showModal}
                    handleEditClose={handleEditClose}
                    Current
                />} */}

            <div className='w-50 d-flex justify-content-center m-0 rounded-5 bg-light'>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Bill</th>
                            <th>UpToDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* shows the users */}
                        {users.map((userData) => {

                            return (
                                <UserDetailsContext.Provider 
                                    key={userData.idBillingList}
                                    value={userData}>

                                        <UserRecord
                                            key={userData.idBillingList}
                                            handleEditOpen={handleEditOpen}
                                        />
                                        
                                </UserDetailsContext.Provider>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>

    )
}

export default UsersPage