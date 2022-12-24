import React from 'react'
import Button from 'react-bootstrap/Button'
import EditRecordComp from './EditRecordComp';
import { useState, useContext } from 'react';
import { UserDetailsContext } from './userDetailsContext';


{/* holds the data for each user */ }
const UserRecord = (props) => {
    const [showModal, setShowModal] = useState(false);
    const userDetails = useContext(UserDetailsContext)

    const handleEditClose = () => {
        setShowModal(false);
    }

    return (

        <tr>
            {/*conditional rendering the modal*/}
            {showModal && <EditRecordComp
                showModal={showModal}
                handleEditClose={handleEditClose}
            />}

            <td>{userDetails.idBillingList}</td>
            <td>{userDetails.Name}</td>
            <td>{userDetails.Address}</td>
            <td>{userDetails.Bill}</td>
            <td>{userDetails.PayedLastMonth === 1 ? "Yes" : "No"}</td>
            <td>
                <Button onClick={() => setShowModal(true)}>Edit</Button>
            </td>
        </tr>
    )
}

export default UserRecord