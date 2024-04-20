import React from 'react';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,


  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'

export default function Nav() {
//   const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

 

        <MDBCollapse navbar>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
           

           

            
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            
            <MDBBtn color='dark'>
              <Link to="/shoppingcart">
                Cart({})
              </Link>
            </MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}