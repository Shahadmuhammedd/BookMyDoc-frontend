import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DocReview from './DocReview';




function ViewDoc() {
    // 1.get id from the params
    const params = useParams()
    console.log(params);
    console.log(params.id);

    ////////////Destructuring///////////
    const{id} =useParams()
    console.log(id);

    //create base url
    const base_url ='https://bookmydoc-mznb.onrender.com/doctors/'
    //state creation for holding particular restaurant details
    const [viewDocData,setViewDocData] =useState({})


    //2.view particular restaurant details
    const viewDoctors=async()=>{
        const {data}= await axios.get(`${base_url}/${id}`)
        console.log(data);
        setViewDocData(data)
    }
    console.log(viewDocData);
    useEffect(()=>{
        viewDoctors()
    },[])


  return (
    <div>
       
        <img src="https://www.sequencehealth.com/wp-content/uploads/2020/04/Improve-Patient-Care-Through-The-Call-Center.jpg" 
     style={{ width: '100%', height: '350px', filter: 'blur(5px)' }} 
     alt="" />
      <div className="docname" style={{ display: 'flex', justifyContent: 'center' , alignItems: 'center', flexDirection: 'column' }}>
    <h1 style={{ color: 'black', textAlign: 'center' }}>{viewDocData.name}</h1>

    
    </div>
    <Card>
      
      <Card.Body style={{background:'#A0AECD' , color:'black'}}>
      <center>
      <Card.Title style={{textDecoration:'underline,', fontWeight:'bold'}}>{viewDocData.hospital}</Card.Title>
        <Card.Header style={{fontWeight:'bold'}}>{viewDocData.specialty}</Card.Header>
        <Card.Text style={{ fontWeight: 'bold', color: 'yellow' }}>
  &#9733; {viewDocData.rating}
</Card.Text>
        <Card.Text style={{fontWeight:'bold'}}>
         Address : {viewDocData.address}
        </Card.Text>
        <Card.Text style={{fontWeight:'bold'}}>
        Contact No : {viewDocData.phone}
        </Card.Text>
        <Card.Text style={{fontWeight:'bold'}}>
        Email : {viewDocData.email}
        </Card.Text>
       <div>
       <Card style={{color:'black'}}>
      <Card.Header style={{textDecoration:'underline,', fontWeight:'bold'}}>Consulting Date & Time</Card.Header>
      <Card.Body>
        <Card.Text style={{fontWeight:'bold'}}>
        Date: {viewDocData.available_days}
        </Card.Text>
          
        <Card.Text style={{fontWeight:'bold'}}>
        Time: {viewDocData.available_hours}
        </Card.Text>
        
        
      </Card.Body>
    </Card>
       </div>
       </center>
      </Card.Body>
    </Card>
    <div className='mt-5 container'>
        <h3 className='mb-4' style={{textAlign:'start', fontWeight:'bold', color:'(10, 66, 117)' }}>Make An Appointment</h3>
        <p style={{textAlign:'justify ', color:'rgb(10, 66, 117 ) ', fontWeight:'bold'}} > OP APPOINTMENT BOOKING</p>
        <p style={{textAlign:'justify' , color:'black'}}> Please Dial This Number For Booking: <span style={{color:'red' , fontWeight:'bold'}}>+1 (555) 678-9012</span></p>
        <p style={{textAlign:'justify', fontWeight:'bold' ,color:'rgb(10, 66, 117 ) '}} >Note: </p>
       <ul>
       
       </ul>
      
        <div className='clearfix'>
           
            
            <img src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Responsive floated image" className="bd-placeholder-img col-md-6 float-md-end mb-3 ms-md-3" width="100%" height="100%" role="img" aria-label="Placeholder: Responsive floated image"></img>
            <ul style={{color:'black'}}>
                <li>Please book your appointments in advance to help us provide you a faster service.</li>
                <li>Walk-in patients will be seen if any of the appointment slots are open after the completion of the booking queue.</li>
                <li>Patients who are already registered with the hospital are requested to provide their hospital number at the time of booking, for faster service.</li>
                <li>Every effort will be made to complete your consultation within 30 minutes from your appointment time. However any unforeseen medical emergencies or complicated medical procedures handled by the consultant may cause a delay.</li>
                <li>You are also requested to inform us in advance if you want to cancel a scheduled appointment.</li>
                <li style={{color:'red'}}>For any medical emergencies, our Accident and Emergency (A&E) unit is open 24 hours x 365 days, where you can avail the services of our A&E consultants without an appointment.</li>
            </ul>
           <h2><DocReview review={viewDocData.reviews}/></h2>
            </div>
      
       
    </div>
    </div>
    
    
    
  )
}

export default ViewDoc