import React from 'react';
import { Row,Col,Grid,Navbar,Nav,NavItem,NavDropdown,MenuItem,FormGroup,FormControl,Button,ControlLabel,Badge} from 'react-bootstrap';
import style from  './index.css';

export default class Navigation extends React.Component{

    render(){
        return(
            <div>

                {/* Start Section MenuBar */}
                <div>

                    <Navbar inverse fluid>
                        <Grid>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <a href="#" className="hidden-lg hidden-md">Cart</a>

                                </Navbar.Brand>
                                <Navbar.Brand style={{textAlign:'center'}}>
                                    <a href="#">MacroCoupon</a>
                                </Navbar.Brand>


                                <Navbar.Toggle />
                            </Navbar.Header>

                            <Navbar.Form pullLeft>
                                <FormControl type="text" placeholder="Location" className='formlocation' />&nbsp;&nbsp;
                                <FormGroup>

                                    <FormControl type="text" placeholder="Search" />
                                </FormGroup>

                                {' '}
                                <Button type="submit">Search</Button>


                            </Navbar.Form>

                            <Navbar.Collapse>

                                <Nav pullRight>

                                    <NavItem eventKey={1} href="#" className="hidden-xs hidden-md">Cart</NavItem>


                                    <NavItem eventKey={2} href="#">LogIn</NavItem>
                                    <NavItem eventKey={3} href="#">SignUp</NavItem>
                                    <NavItem eventKey={4} href="#">Eng</NavItem>
                                    <NavItem eventKey={5} href="#">Kh</NavItem>
                                </Nav>
                            </Navbar.Collapse>
                        </Grid>
                    </Navbar>
                </div>  {/* End Section MenuBar */}
            </div>
        );
    }
}
