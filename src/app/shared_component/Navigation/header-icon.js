/**
 * Created by Acer on 12/6/2016.
 */

import React from'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Navbar} from'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Accordion,Panel,Row,Col,Grid,Nav,NavItem,NavDropdown,FormGroup,FormControl,Button,ControlLabel,Badge} from 'react-bootstrap';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const styles={
    drawer:{
        width:'400px',
    },
    icon:{
        fontSize:'20px',
        color: 'white',
        position: 'relative',
        top: '11px',
        display: 'inline-block',
        fontFamily: 'Glyphicons Halflings',
        fontStyle: 'normal',
        fontWeight: '400px',
        paddingRight: '6px',
        marginRight:'5px'
    },
    a:{
        color:'white'
    },
    h3:{
        textAlign:'center'
    }

}
export  default class IconHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleToggle=this.handleToggle.bind(this);
        this.handleClose=this.handleClose.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open});}
    handleClose (){
        this.setState({open: false});
    }
    render(){
        return(
        <MuiThemeProvider>
            <div>
                <Drawer  docked={false}
                         width={300}
                         open={this.state.open}
                         onRequestChange={(open) => this.setState({open})} >
                    <a href="#">
                        <span className="glyphicon glyphicon-remove" onTouchTap={this.handleToggle}></span>
                    </a>
                    <img className="logo" src="/assets/images/logo.png"/>
                    <Accordion>
                        <Panel header=">&nbsp;Product" eventKey="1" >
                            <Accordion>
                                <Panel header="Car" eventKey="1">

                                </Panel>
                            </Accordion>
                        </Panel>
                    </Accordion>
                    <Accordion>
                        <Panel header=">&nbsp;Service" eventKey="1">

                        </Panel>
                    </Accordion>
                    <MenuItem>SignIn</MenuItem>
                    <MenuItem>SignUp</MenuItem>

                </Drawer>
                <Navbar.Header >
                    <span style={styles.icon} className="glyphicon glyphicon-align-justify hidden-xs " onTouchTap={this.handleToggle}></span>
                    <Navbar.Brand>
                        <a href="#" style={styles.a} >MacroCoupon</a>  &nbsp;
                        <a href="#" className="hidden-lg hidden-md hidden-sm" style={styles.a}>Cart[0]</a>
                    </Navbar.Brand>
                    <Navbar.Toggle onTouchTap={this.handleToggle} />
                </Navbar.Header>
          </div>
        </MuiThemeProvider>

        );
    }
}