import React from 'react';
import { Row,Col,Grid,Navbar,Nav,NavItem,NavDropdown,MenuItem,FormGroup,FormControl,Button,ControlLabel,Badge} from 'react-bootstrap';
import style from  './index.css';
<<<<<<< HEAD
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
=======



>>>>>>> c8eff4a5e51e30b6e4434642e01e12711bea1cbe
export default class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() { this.setState({open: !this.state.open}); }
    render(){
        return(
            <MuiThemeProvider>
            <div>

                {/* Start Section MenuBar */}
                <div onTouchTap={this.handleToggle}>

                    <Navbar inverse fluid >
                        <Grid>
                            <Navbar.Header >
                                <Navbar.Brand>
                                    <a href="#" className="hidden-lg hidden-md">Cart(s)</a>

                                </Navbar.Brand>
                                <Navbar.Brand style={{textAlign:'center'}}>
                                    <a href="#"  onTouchTap={this.handleToggle}>MacroCoupon</a>
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

                                    <NavItem eventKey={1} href="#" className="hidden-xs hidden-sm">Cart(s)</NavItem>


                                    <NavItem eventKey={2} href="#" className="hidden-xs hidden-sm">LogIn</NavItem>
                                    <NavItem eventKey={3} href="#" className="hidden-xs hidden-sm">SignUp</NavItem>
                                    <NavItem eventKey={4} href="#" className="hidden-xs hidden-sm">Eng</NavItem>
                                    <NavItem eventKey={5} href="#" className="hidden-xs hidden-sm">Kh</NavItem>
                                </Nav>
                            </Navbar.Collapse>
                        </Grid>
                    </Navbar>
                </div>  {/* End Section MenuBar */}
                <Drawer open={this.state.open}>
                    <NavItem>Menu Item</NavItem>
                    <NavItem>Menu Item 2</NavItem>
                </Drawer>
            </div>

                </MuiThemeProvider>
        );
    }
}
