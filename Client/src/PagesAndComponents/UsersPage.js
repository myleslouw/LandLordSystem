import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table'
import UserRecord from './UserRecord'
import { UserDetailsContext } from './userDetailsContext'
import { AllUsersContext } from './AllUsersContext'


const UsersPage = () => {
    //context to make the users accessible
    const {users} = useContext(AllUsersContext);
    
    console.log(users.length)

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
                                    <UserDetailsContext.Provider
                                        key={userData.idBillingList}
                                        value={userData}>

                                        <UserRecord
                                            key={userData.idBillingList}
                                        //showModal={showModal}
                                        //setShowModal={setShowModal}
                                        //handleEditOpen={handleEditOpen}
                                        //handleEditClose={handleEditClose}
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