import React from 'react';
import {ListGroup,ListGroupItem,Col,Row,Grid} from 'react-bootstrap';
export default class Company extends React.Component{

    render(){
        return(
            <div>
                <Grid>
                <Row>
                    <Col sm={12} md={4} lg={4}>
                        <ListGroup>
                            <h4>Company</h4>
                            <ListGroupItem href='#'> about company</ListGroupItem>
                            <ListGroupItem href='#'> company job </ListGroupItem>
                            <ListGroupItem href='#'> company blog</ListGroupItem>
                            <ListGroupItem href='#'> company blog</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <ListGroup>
                            <h4>Woek with Macrocoupon</h4>
                            <ListGroupItem href='#'>company press</ListGroupItem>
                            <ListGroupItem href='#'>merchant register</ListGroupItem>
                            <ListGroupItem href='#'>Macrocoupon page on Facebook </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <ListGroup>
                            <h4>Follow us</h4>
                            <ListGroupItem href='#'>Macrocoupon page on Tweeter</ListGroupItem>
                            <ListGroupItem href='#'> Macrocoupon IOS App</ListGroupItem>
                            <ListGroupItem href='#'> Macrocoupon android App</ListGroupItem>
                        </ListGroup>
                    </Col>

                </Row>
                </Grid>

            </div>
        );
    }

}