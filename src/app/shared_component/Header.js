/**
 * Created by Naseat on 11/28/2016.
 */

import React from 'react';
import { Row,Col,Grid,Navbar,Nav,NavItem,NavDropdown,MenuItem,FormGroup,FormControl,Button,ControlLabel,Badge} from 'react-bootstrap';

export default class Header extends React.Component{
    render(){
        return(
            <div>
                <Navbar inverse fluid >
                    <Grid>
                        <Navbar.Header >
                            <Navbar.Brand>
                                <a href="#" className="hidden-lg hidden-md">Cart(s)</a>
                            </Navbar.Brand>
                            <Navbar.Brand style={{textAlign:'center'}}>
                                <a href="#">MacroCoupon</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#" className="hidden-xs hidden-sm">Cart(s)</NavItem>
                                <NavItem eventKey={2} href="#" className="hidden-xs hidden-sm">LogIn</NavItem>
                                <NavItem eventKey={3} href="#" className="hidden-xs hidden-sm">SignUp</NavItem>
                                <NavItem eventKey={4} href="#" className="hidden-xs hidden-sm">Eng</NavItem>
                                <NavItem eventKey={5} href="#" className="hidden-xs hidden-sm">Kh</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Grid>
                </Navbar>
            </div>

        );
    }
}