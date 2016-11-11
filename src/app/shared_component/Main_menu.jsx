import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Row,Col,Grid,Navbar,Nav,NavItem,NavDropdown,MenuItem,FormGroup,FormControl,Button,ControlLabel,Badge} from 'react-bootstrap';
import Bootstrap from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';  // in ECMAScript 6
import style from './index.css';

var products = [
    {
        id: 1,
        name: "Product1",
        price: 120
    },{
        id: 2,
        name: "Product2",
        price: 80
    },{
        id: 3,
        name: "Product3",
        price: 207
    },{
        id: 4,
        name: "Product4",
        price: 100
    },{
        id: 5,
        name: "Product5",
        price: 150
    },{
        id: 6,
        name: "Product6",
        price: 160
    },{
        id: 7,
        name: "Product7",
        price: 80
    },{
        id: 8,
        name: "Product8",
        price: 80
    },{
        id: 9,
        name: "Product9",
        price: 80
    },{
        id: 10,
        name: "Product2",
        price: 80
    },{
        id: 8,
        name: "Product8",
        price: 80
    },{
        id: 9,
        name: "Product9",
        price: 80
    },{
        id: 10,
        name: "Product2",
        price: 80
    }
];
const styles={
    navbar:{
        background:'#3b5998',
        color:'white',
        borderColor:'white',
        marginBottom: 0,
    },
    navbarHeader :{
        color:'white'
    },
    cart:{
        textAlign: 'center',
    }
}

function format(cell, row){
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}
//Row select setting
var selectRowProp = {
    mode: "checkbox",  //checkbox for multi select, radio for single select.
    clickToSelect: true,   //click row will trigger a selection on that row.
    bgColor: "rgb(238, 193, 213)"   //selected row background color
};
export default class Main_menu extends React.Component{



    render(){
        return(
      <MuiThemeProvider>
        <div>
            {/* Start Section MenuBar */}
          <div>
              <Navbar style={styles.navbar }  inverse fluid>
                  <Navbar.Header style={styles.navbarHeader}>
                      <Navbar.Brand>
                          <a style={styles.navbar} href="#">MacroCoupon</a>

                      </Navbar.Brand>
                      <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>

                      <Nav pullRight>
                          <NavItem eventKey={1} href="#">LogIn</NavItem>
                          <NavItem eventKey={2} href="#">SignUp</NavItem>
                          <NavItem eventKey={3} href="#">Eng</NavItem>
                          <NavItem eventKey={4} href="#">Kh</NavItem>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
          </div>  {/* End Section MenuBar */}

            {/* Start Section Search */}
            <div>

                {/*<Row style={styles.cart}>*/}

                    <Navbar style={styles.cart}>

                      <Navbar.Form pullLeft>
                          <Grid>
                          <FormGroup controlId="formControlsSelect">
                              <ControlLabel>All:</ControlLabel>
                              <FormControl componentClass="select" placeholder="select">
                                  <option value="select"></option>
                                  <option value="select">SelectA</option>
                                  <option value="other">SelectB</option>
                                  <option value="other">SelectC</option>
                              </FormControl>
                          </FormGroup>
                          <FormGroup>
                              <FormControl type="text" placeholder="Search" />
                          </FormGroup>
                          {' '}
                          <Button type="submit">Search Here..</Button>

                           <img src="./../../assets/images/5.jpg"/><a href="#">Cart</a>
                        </Grid>
                      </Navbar.Form>

                    </Navbar>


          </div>

            {/* End Section Search */}
            {/* Start Section Container */}


            <div>
                <Grid>
                <BootstrapTable
                    data={products}
                    striped={true}
                    hover={true}
                    condensed={true}
                    pagination={true}
                    selectRow={selectRowProp}
                    insertRow={true}
                    deleteRow={true}
                    columnFilter={true}
                    search={true}>
                    <TableHeaderColumn dataField="id" isKey={true} dataAlign="right" dataSort={true}>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="price" dataAlign="center" dataFormat={format} dataSort={true}>Product Price</TableHeaderColumn>
                </BootstrapTable>
                </Grid>
            </div>

      </div>
     </MuiThemeProvider>

        );
    }
}