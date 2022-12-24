import React from 'react'
import { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Axios from 'axios'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import EditRecordComp from './EditRecordComp'
import UserRecord from './UserRecord'


const UsersPage = () => {
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
        <div className='vh-100 w-auto d-flex justify-content-center align-items-start pt-5 bg-dark'>
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
                            <UserRecord 
                            idBillingList={userData.idBillingList}
                            Name={userData.Name}
                            Address={userData.Address}
                            Bill={userData.Bill}
                            PayedLastMonth={userData.PayedLastMonth}
                            />
                        )})}
                    </tbody>
                </Table>
            </div>
        </div>

    )
}

export default UsersPage