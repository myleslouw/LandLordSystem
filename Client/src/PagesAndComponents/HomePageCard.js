import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Card from 'react-bootstrap/Card'

const HomePageCard = (props) => {

    return (
        <div className='col-6'>
            <LinkContainer
                className='h-100'
                to={props.linkLocation}>
                <Card
                    className='shadow shadow-warning shadow-intensity-lg w-100 h-100'>
                    <Card.Body className='d-flex flex-column align-items-center'>
                        <Card.Title>{props.cardTitle}</Card.Title>
                        <Card.Img className='w-50 m-4 img-fluid roundedCircle' variant="top" src={props.cardIMG} />
                        <Card.Text className='min-h-25 text-center'>
                            {props.cardDescription}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </LinkContainer></div>
    )
}

export default HomePageCard