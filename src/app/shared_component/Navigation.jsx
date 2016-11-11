import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';


const menu={
    menu:{
        background:'gray',
        display:'inline-block'
    },
    menuitem:{
        display:'inline-block'
    },
    rasibutton:{
        margin: '10px 0px',
    }
}

export default class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleToggle = this.handleToggle.bind(this);}

    //handleToggle = () => this.setState({open: !this.state.open});
    handleToggle() { this.setState({open: !this.state.open}); }
    //handleChange = (event, index, value) => this.setState({value});
    render(){
        return(
            <MuiThemeProvider>
                <div>
                        <Row>{/*
                            <Col xs={12} md={12} lg={12}>
                                <AppBar
                                    title="logo"
                                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                                    onTouchTap={this.handleToggle}
                                >
                                    <FlatButton label="LogIn" />
                                    <FlatButton label="SignIn" />
                                    <FlatButton label="Eng" /><FlatButton label="Kh" />
                                </AppBar>
                                <Drawer open={this.state.open}>
                                    <MenuItem>SignIn</MenuItem>
                                    <MenuItem>SignUp</MenuItem>
                                    <MenuItem><a href="#"> Eng</a> || <a href="#"> Kh</a></MenuItem>
                                </Drawer>
                            </Col>*/}
                            <Col xs={12} md={12} lg={12} style={{background:'rgba(62, 62, 83, 0.09)', float:'right'}}>

                            </Col>
                        </Row>

                </div>
            </MuiThemeProvider>
        );
    }

}