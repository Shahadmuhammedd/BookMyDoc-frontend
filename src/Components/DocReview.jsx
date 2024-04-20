import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';

export default function DocReview ({review}) {
    console.log({review});

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div> <Button style={{color:'white', background:'rgb(10, 66, 117)'}}variant="primary" onClick={handleShow}>
    Reviews
  </Button>

  <Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title style={{color:'rgb(10, 66, 117)'}}>Patients Reviews</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
    {review?.map((review, index) => (
                        <ListGroup className='my-3' key={index} style={{background:'rgb(10, 66, 117)' }}>
                            <ListGroup.Item style={{color:'white'}}>Name : {review.patient_name}</ListGroup.Item>
                            <ListGroup.Item style={{color:'white'}}>Date : {review.date}</ListGroup.Item>
                            <ListGroup.Item style={{color:'white'}}>Rating : {review.rating}</ListGroup.Item>
                            <ListGroup.Item style={{color:'white'}}>Comments : {review.comments}</ListGroup.Item>
                        </ListGroup>
                    ))}
    </Offcanvas.Body>
  </Offcanvas></div>
  )
}
