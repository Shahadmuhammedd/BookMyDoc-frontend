import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>   <MDBNavbar className='nav p-2 fixed-top navbar' role='navigation'  >
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        <img
          src='http://clipart-library.com/images/zcXeq4qcB.png'
          height='30'
          alt=''
          loading='lazy'
        />
      <h2 style={{color: 'white', }}>BMD</h2>
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header