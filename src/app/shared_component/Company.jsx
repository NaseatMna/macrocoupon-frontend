import React from 'react';
import {ListGroup,ListGroupItem,Col,Row,Grid} from 'react-bootstrap';

const styles={
    content:{
        //backgroundImage:'url(/assets/images/4.jpg)',
        background:'rgb(250, 252, 255)',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'100% 100%'
    },
    listgroup:{
        background:'rgb(250, 252, 255)',
    }
}
export default class Company extends React.Component{

    render(){
        return(
            <div style={styles.content}>
                <Grid>
                <Row>
                    <Col  sm={12} md={4} lg={6}>
                        <ListGroup style={styles.listgroup}>
                            <h4>Company</h4>
                            <ListGroupItem href='#'>about company</ListGroupItem>
                            <ListGroupItem href='#'> company job </ListGroupItem>
                            <ListGroupItem href='#'> company blog</ListGroupItem>
                            <ListGroupItem href='#'> company press</ListGroupItem>
                            <ListGroupItem href='#'> join us to grow you Business</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col sm={12} md={4} lg={6}>
                        <ListGroup style={styles.listgroup}>
                            <h4>Social</h4>
                            <ListGroupItem href='#'>facebook</ListGroupItem>
                            <ListGroupItem href='#'>tweeter</ListGroupItem>
                            <ListGroupItem href='#'>ios App</ListGroupItem>
                            <ListGroupItem href='#'>android App</ListGroupItem>
                        </ListGroup>
                    </Col>

                </Row>
                </Grid>

            </div>
        );
    }

}