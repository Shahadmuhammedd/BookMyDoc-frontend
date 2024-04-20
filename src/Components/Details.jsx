import React from 'react'
import './Details.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,

} from 'mdb-react-ui-kit';
function Details() {
  return (
    
    
    <div className='about-bmd   p-5 ' >
       
        
       <div className='doc-img' >
       
       <h2 style={{textAlign:'center', fontWeight:'bold'}}>ABOUT BMD</h2><hr />
       <img src="http://www.freepngclipart.com/download/cartoon/58858-physician-cartoon-doctors-png-download-free.png" alt="Responsive floated image" className="bd-placeholder-img col-md-6 float-md-end mb-3 ms-md-3" width="100%" height="100%" role="img" aria-label="Placeholder: Responsive floated image"/>
       <p style={{textAlign:'justify', color:'rgb(10, 66, 117)'}}> Welcome to BookMyDoc (BMD)- Your Trusted Partner in Healthcare! </p><br />
        <p style={{ textAlign:'justify', color:'black'}}>At BookMyDoc, we understand the importance of your health and well-being. That's why we've created a seamless and user-friendly platform to simplify the process of booking doctor appointments. Our mission is to connect you with the right healthcare professionals, making your journey to wellness as convenient and efficient as possible.</p><br />

        <p style={{color: 'rgb(10, 66, 117)', textDecoration:'underline'}}>What sets BookMyDoc apart?</p>
        <b style={{color: 'rgb(10, 66, 117)'}}>1. Easy Appointment Booking:</b><br />
        <p style={{textAlign:'justify' , color:'black'}}>Gone are the days of waiting in long queues or spending precious time on the phone. With BookMyDoc, you can effortlessly schedule appointments with your preferred doctors at the click of a button. Our intuitive platform allows you to browse through a diverse range of healthcare providers, view their availability, and secure your appointment without any hassle.</p><hr /><hr />
        <b style={{color: 'rgb(10, 66, 117)'}}>2. Comprehensive Healthcare Network:</b> <br />
        <p style={{textAlign:'justify' , color:'black'}}>BookMyDoc boasts an extensive network of qualified and experienced healthcare professionals across various specialties. Whether you're looking for a general practitioner, specialist, or allied healthcare provider, we've got you covered. Our platform ensures that you have access to a wide range of medical expertise to address your unique healthcare needs.</p><br />
       <b style={{color:'rgb(10, 66, 117)'}}> 3. Reviews and Ratings:</b><br />
        <p style={{textAlign:'justify' , color:'black'}}>Make informed decisions about your healthcare by exploring reviews and ratings from other BookMyDoc users. We believe in transparency, and the feedback from our community can guide you in choosing the right healthcare professional for your needs.</p><hr />
        <p style={{textAlign:'justify', color:'black'}}>Join us on the journey to better health with BookMyDoc. We're committed to revolutionizing the way you access healthcare services, making it a convenient and personalized experience. Your well-being is our priority, and we're here to simplify the path to a healthier, happier you. BookMyDoc - Your Health, Your Way!</p>
       
        <div>
        <MDBCard className='w-75  bg-light'>
        <MDBCardBody>
          <MDBCardTitle style={{color:'rgb(10, 66, 117)'}}>Our Mission</MDBCardTitle>
          <MDBCardText style={{color:'black'}}>
"Our mission is to provide compassionate and comprehensive care to all patients, ensuring their well-being and comfort throughout their healthcare journey. We strive to deliver excellence in medical services, foster a culture of innovation and continuous improvement, and empower our staff to make a positive impact on the lives of those we serve. At our hospital, every patient is valued, and their health and safety are our top priorities.".</MDBCardText>
          
        </MDBCardBody>
      </MDBCard>

      <br />

      <MDBCard className='w-75 bg-light'>
        <MDBCardBody>
          <MDBCardTitle style={{color:'rgb(10, 66, 117)'}}>Our Vision</MDBCardTitle>
          <MDBCardText style={{color:'black'}}>
"Our vision is to be a trusted leader in healthcare, recognized for our commitment to excellence, innovation, and patient-centered care. We aim to set new standards in healthcare delivery, driving positive change in our community and beyond. By fostering collaboration, embracing technology, and prioritizing the needs of our patients, we aspire to create a healthier, happier future for all."</MDBCardText>
          
        </MDBCardBody>
      </MDBCard>
        </div>
        

       
       </div>
       </div>
       
       
  )
}

export default Details