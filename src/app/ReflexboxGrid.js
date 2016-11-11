import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
//import image from './../../assets/images/1.jpg'

export default class ReflexboxGrid extends Component {
    render(){
        return(
            <div>
            <Grid>
                <Row>
                    <Col xs={12}md={12} lg={12}> Test1</Col>
                    <Col md={6}>Test2</Col>
                </Row>
            </Grid>
            </div>
        );
    }
}