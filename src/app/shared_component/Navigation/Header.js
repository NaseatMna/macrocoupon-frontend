/**
 * Created by Naseat on 11/28/2016.
 */

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Row,Col,Grid,Navbar,Nav,NavItem,NavDropdown,FormGroup,FormControl,Button,ControlLabel,Badge} from 'react-bootstrap';


export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleToggle=this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open});}

    render(){
        return(
            <MuiThemeProvider>
            <div>
                    <RaisedButton
                        label="Toggle Drawer"
                        onTouchTap={this.handleToggle}
                    />
                    <Drawer open={this.state.open}>
                        <MenuItem>Menu Item</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>
            </div>
                </MuiThemeProvider>

        );
    }
}