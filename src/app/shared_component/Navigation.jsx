import React from 'react';
import { Row,Col,Grid,Navbar,Nav,NavItem,NavDropdown,MenuItem,FormGroup,FormControl,Button,ControlLabel,Badge} from 'react-bootstrap';

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
    },
    icon:{
        color: 'white',
        position: 'relative',
        top: '14px',
        display: 'inline-block',
        fontFamily: 'Glyphicons Halflings',
        fontStyle: 'normal',
        fontweight: '400px',
        paddingright: '6px',
        marginRight:'5px'
    },
    a:{
        color:'white'
    }
}

export default class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {showMenuBar: false}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(prevState => ({
            showMenuBar: !prevState.showMenuBar
        }));
    }

    render(){
        function MenuLeftBar(props) {
            if (!props.warn) {
                return null;
            }
            return (
                <div>
                    <Nav style={styles.style} >
                        <span className="glyphicon glyphicon-remove"></span>
                        <NavItem eventKey={1} href="#">NavItem 1 content</NavItem>
                        <NavItem eventKey={2} title="#">NavItem 2 content</NavItem>
                        <NavItem eventKey={3} href="#">NavItem 3 content</NavItem>
                        <NavItem eventKey={4} title="#">NavItem 4 content</NavItem>
                    </Nav>
                </div>
            );}
        return(
            <div>
                {/* Start Section MenuBar */}
                <div>
                    <MenuLeftBar warn={this.state.showMenuBar}/>
                    <Navbar inverse fluid >
                        <Grid>
                            <Navbar.Header ><span style={styles.icon} className="glyphicon glyphicon-th-list" onClick={this.handleToggleClick}></span>
                                <Navbar.Brand>
                                    <a href="#" className="hidden-lg hidden-md">Cart(s)</a>
                                </Navbar.Brand>
                                <Navbar.Brand style={{textAlign:'center'}}>
                                    <a href="#" style={styles.a} >MacroCoupon</a>
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
            </div>

        );
    }
}
