import React from 'react';

import {Nav , NavItem , NavDropdown,MenuItem,Navbar} from 'react-bootstrap';
const styles={
        style:{
            color:'rgba(0, 0, 0, 0.870588)',
                backgroundColor: 'rgb(255, 255, 255)',
                transition: 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
                boxSizing: 'border-box',
                boxShadow:'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
                borderRadius:'0px',
                height: '100%',
                width: 256,
                position: 'fixed',
                zIndex: '1300',
                left: '0px',
                top: '0px',
                transform: 'translate(0px, 0px)',
                overflow: 'auto'
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