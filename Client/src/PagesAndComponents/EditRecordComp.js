import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState, useContext } from 'react';
import { UserDetailsContext } from './userDetailsContext';

const EditRecordComp = (props) => {

  const userDetails = useContext(UserDetailsContext)

  return (

    <Modal show={props.showModal}>

      <Modal.Header closeButton>
        <Modal.Title>Edit User Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder={userDetails.Name} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder={userDetails.Address} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleEditClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleEditClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditRecordComp