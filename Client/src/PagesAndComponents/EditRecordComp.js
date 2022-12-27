import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState, useContext } from 'react';
import { AllUsersContext } from './AllUsersContext';
import { UserDetailsContext } from './userDetailsContext';
import Axios from 'axios';

const EditRecordComp = (props) => {

  //gets the user details from the context and allows for it to be changed
  const userDetails = useContext(UserDetailsContext)
  //allows for the updated user to change the list of users
  const { setUsers } = useContext(AllUsersContext)
  //holding the new details in state
  const [newUserName, setNewUserName] = useState(userDetails.Name);
  const [newUserAddress, setNewUserAddress] = useState(userDetails.Address);


  const handleDetailsChange = () => {
    //updates the record in the server
    Axios.put('http://localhost:3001/updateuser', { newName: newUserName, newAddress: newUserAddress, IDRecord: userDetails.idBillingList })
      .then((response) => {
      })
      .catch(error => {
        console.log(error.response)
      })
      .then(() => {
        //closes modal after
        props.handleEditClose();
        Axios.get('http://localhost:3001/fetchusers').then((response) => {
          setUsers(response.data)
        })
        //window.location.reload();
      });
  }

  return (

    <Modal show={props.showModal}>

      <Modal.Header closeButton>
        <Modal.Title>Edit User Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="email"
              placeholder={newUserName}
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder={newUserAddress}
              value={newUserAddress}
              onChange={(e) => setNewUserAddress(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleEditClose}>
          Close
        </Button>
        <Button variant="primary" type="submit" onClick={handleDetailsChange}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditRecordComp