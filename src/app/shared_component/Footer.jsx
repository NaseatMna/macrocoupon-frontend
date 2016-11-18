import React from 'react';
import {Grid,Navbar,Nav,NavItem,NavDropdown,MenuItem,FormGroup,Col,Row,ControlLabel,FormControl,Checkbox,Button} from 'react-bootstrap';
import { render } from 'react-dom';
import Form, { Input, Fieldset } from 'react-bootstrap-form';
import styles from './index.css';

export default class Footer extends React.Component {
    constructor(props){
        super(props);
    }
    render(){

        return(
                    <div>
                        <footer className={styles.footer}>
                           <p>© Macrocoupon 2016</p>
                       </footer>
                    </div>
        );
    }
}