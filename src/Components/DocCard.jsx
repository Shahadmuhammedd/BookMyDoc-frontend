import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

function DocCard({ docArray }) {
  console.log(docArray);
 

  return (
    
    <div className="row">
      <h3 style={{textAlign:'center', textDecoration:'underline'}}>Top Experts For Your Health</h3>
      <br /><br />
      {docArray.map((item, index) => (
        <div key={index} className="col p-4 ">
          <MDBCard className=' p-1 ' style={{width:'25rem',  color:'black', background:' #A0AECD'}}>
            <MDBCardBody>
              <MDBCardTitle style={{fontStyle:'bold'}}>{item.name}</MDBCardTitle>
              <MDBCardText style={{fontStyle:'bold'}}>{item.hospital}</MDBCardText>
              <MDBCardText>{item.specialty}</MDBCardText>
              <MDBCardText>{item.address}</MDBCardText>
             <Link to={`/view/${item.id}`}>
             <MDBBtn style={{color:'white', background:'rgb(10, 66, 117)'}}>Book An Appointment</MDBBtn></Link>
            </MDBCardBody>
          </MDBCard>
        </div>
      ))}
    </div>
  );
}

export default DocCard;
