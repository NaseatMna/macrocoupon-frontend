import React from 'react';

import {Nav , NavItem , NavDropdown,MenuItem,Navbar} from 'react-bootstrap';
const styles={
        style:{
            display:''
        }
}
export default class Main_menu extends React.Component{
    render(){
        return(
            <div>
                <Navbar>

                    <Nav >
                        <NavItem eventKey={1} href="#">Coupons</NavItem>
                        <NavItem eventKey={2} href="#">Clearance</NavItem>
                        <NavItem eventKey={2} href="#">Best Deal</NavItem>


                    </Nav>
                </Navbar>
            </div>
        );
    }
}