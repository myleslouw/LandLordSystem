import React from 'react'
import Button from 'react-bootstrap/Button'


{/* holds the data for each user */}
const UserRecord = (props) => {
    return (
        <tr>
            <td>{props.idBillingList}</td>
            <td>{props.Name}</td>
            <td>{props.Address}</td>
            <td>{props.Bill}</td>
            <td>{props.PayedLastMonth === 1 ? "Yes" : "No"}</td>
            <td>
                <Button>Edit</Button>
            </td>
        </tr>
    )
}

export default UserRecord