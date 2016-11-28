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
    },
    h4:{
        textAlign:'center',

    },
    img:{
        width: '100%',
       verticalAlign: 'middle'
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
                            <ListGroupItem href='#'><h5>about company</h5></ListGroupItem>
                            <ListGroupItem href='#'> company job </ListGroupItem>
                            <ListGroupItem href='#'> company blog</ListGroupItem>
                            <ListGroupItem href='#'> company press</ListGroupItem>
                            <ListGroupItem href='#'> join us to grow you Business</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col sm={12} md={4} lg={6}>
                        <ListGroup style={styles.listgroup}>
                            <h4 style={styles.h4}>Social</h4>
                            <Row>
                                <Col sm={12} md={6}><ListGroupItem href='#'><img style={styles.img} src="/assets/images/facebook.png"/></ListGroupItem></Col>
                                <Col sm={12} md={6}><ListGroupItem href='#'><img style={styles.img} src="/assets/images/twitter.png"/></ListGroupItem></Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={6}> <ListGroupItem href='#'><img style={styles.img} src="/assets/images/ios.png"/></ListGroupItem></Col>
                                <Col sm={12} md={6}><ListGroupItem href='#'><img style={styles.img} src="/assets/images/android.png"/></ListGroupItem></Col>
                            </Row>




                        </ListGroup>
                    </Col>

                </Row>
                </Grid>

            </div>
        );
    }

}