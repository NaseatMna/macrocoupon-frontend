import React from 'react';
import {Grid , Row,Col,Thumbnail,Button} from 'react-bootstrap';

const styles={

    content:{
        background:'rgb(255, 255, 255)',
    },
    row:{
        marginTop:'10px'
    },
    box:{
        height:'157px'
    },
    h3:{
        marginTop: '0px',
        background: '#d6d6d6',
        padding: '5px',
        fontSize: '19px',
        textAlign: 'center',
        fontFamily: 'TimesNewRomand'

    },
    Thumbnail:{
        padding: '5px',
        color: '#333',
        fontSize: '15px',
        fontFamily: 'cursive',
        background: 'rgb(238, 238, 238)'
    },
    price:{
        background:'gay'
    },
    h6:{
        top:'1px',
        color: 'white',
        fontFamily:'cursive',
        fontWeight: 'bold',
        fontSize: '17px',
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0.53)',
        padding:' 5px 30px 8px 17px',
        marginLeft: '5px'
    },
    title:{
        //top: '1px',
        color: 'rgb(54, 138, 226)',
        lineHeight: 4,
        //background:' rgb(37, 30, 24)',
        //position:' absolute',
        //width:' 80%',
        //height:' 8%',
        fontSize:'18px',
        textAlign: 'center',
        fontFamily: 'cursive'
    },

    originalPrice:{
        fontFamily:'cursive',
        lineHeight: 6,

        },
    h1:{
        marginTop:'2px',
        //borderTop:'1px solid #1f71d6',
        //borderBottom:'1px solid #1f71d6',
        fontSize: '20px',
        //textAlign: 'center',
        //background:'rgb(255, 255, 255)',
        //padding:' 6px',
        color: '#333',
        fontFamily:'cursive'
}

}

export default class Diamon extends React.Component{
    constructor(props){
        super(props);
    }
    scrollToTop() {
        scroll.scrollToTop();
    }

    render(){
        return(
            <div style={styles.content}>
                <Grid>
                    <Row style={styles.row}>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <a href="#" >
                            <div style={styles.price}><h6 style={styles.h6}>Discount: 15%</h6> </div>
                        <Thumbnail src="/assets/images/niagara.jpg" alt="242x200">
                            <div style={styles.box}>
                                <h1 style={styles.h1}>PhnomPenh Hotel </h1>
                            <p>Niagara Falls Hotel with Family Fun Package
                                Niagara Falls Hotel with Family Fun Package
                            </p>
                                <span style={styles.originalPrice}><strike>$12</strike></span>&nbsp;&nbsp;
                                <span style={styles.title}>$9.60</span>
                            </div>
                        </Thumbnail>
                            </a>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <a href="#" className="box">
                            <div style={styles.price}><h6 style={styles.h6}>Discount: 10%</h6> </div>
                        <Thumbnail src="/assets/images/taza.jpg" alt="242x200">
                            <div style={styles.box}>
                                <h1 style={styles.h1}>Sea Foods</h1>
                            <p>Claim this deal by linking to your eligible Visa card
                                Pay for qualifying purchases at the merchant with your linked Visa card
                            </p>
                            </div>
                        </Thumbnail>
                            </a>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <a href="#" className="box">
                            <div style={styles.price}><h6 style={styles.h6}>Discount: 20%</h6> </div>
                        <Thumbnail src="/assets/images/mixteco.jpg" alt="242x200">
                            <div style={styles.box}>
                             <h1 style={styles.h1}>Khmer Foods</h1>
                            <p>Claim this deal by linking to your eligible Visa card
                                Pay for qualifying purchases at the merchant with your linked Visa card</p>

                            </div>
                        </Thumbnail>
                            </a>
                    </Col>
                    <Col  xs={12} sm={6} md={3} lg={3}>
                        <a href="#" className="box">
                            <div style={styles.price}><h6 style={styles.h6}>Discount:50%</h6> </div>
                        <Thumbnail  src="/assets/images/wicosin.jpg" alt="242x200">
                            <div style={styles.box}>
                                <h1 style={styles.h1}>Khmer Resort</h1>
                            <p>No matter the season, guests can enjoy the outdoors at the 4-star Grand Geneva Resort
                                & Spa. Winter brings skiing </p>

                           </div>
                        </Thumbnail>
                        </a>
                    </Col>

                </Row>

                    <Row style={styles.row}>
                        <Col xs={12} sm={6} md={3} lg={3}>
                            <a href="#" >
                                <div style={styles.price}><h6 style={styles.h6}>Discount: 15%</h6> </div>
                                <Thumbnail src="/assets/images/niagara.jpg" alt="242x200">
                                    <div style={styles.box}>
                                        <h1 style={styles.h1}>PhnomPenh Hotel </h1>
                                        <p>Niagara Falls Hotel with Family Fun Package
                                            Niagara Falls Hotel with Family Fun Package
                                        </p>

                                    </div>
                                </Thumbnail>
                            </a>
                        </Col>
                        <Col xs={12} sm={6} md={3} lg={3}>
                            <a href="#" className="box">
                                <div style={styles.price}><h6 style={styles.h6}>Discount: 10%</h6> </div>
                                <Thumbnail src="/assets/images/taza.jpg" alt="242x200">
                                    <div style={styles.box}>
                                        <h1 style={styles.h1}>Sea Foods</h1>
                                        <p>Claim this deal by linking to your eligible Visa card
                                            Pay for qualifying purchases at the merchant with your linked Visa card
                                        </p>
                                    </div>
                                </Thumbnail>
                            </a>
                        </Col>
                        <Col xs={12} sm={6} md={3} lg={3}>
                            <a href="#" className="box">
                                <div style={styles.price}><h6 style={styles.h6}>Discount: 20%</h6> </div>
                                <Thumbnail src="/assets/images/mixteco.jpg" alt="242x200">
                                    <div style={styles.box}>
                                        <h1 style={styles.h1}>Khmer Foods</h1>
                                        <p>Claim this deal by linking to your eligible Visa card
                                            Pay for qualifying purchases at the merchant with your linked Visa card</p>

                                    </div>
                                </Thumbnail>
                            </a>
                        </Col>
                        <Col  xs={12} sm={6} md={3} lg={3}>
                            <a href="#" className="box">
                                <div style={styles.price}><h6 style={styles.h6}>Discount:50%</h6> </div>
                                <Thumbnail  src="/assets/images/wicosin.jpg" alt="242x200">
                                    <div style={styles.box}>
                                        <h1 style={styles.h1}>Khmer Resort</h1>
                                        <p>No matter the season, guests can enjoy the outdoors at the 4-star Grand Geneva Resort
                                            & Spa. Winter brings skiing </p>

                                    </div>
                                </Thumbnail>
                            </a>
                        </Col>

                    </Row>
                    <Row style={styles.row}>
                        <Col xs={12} sm={6} md={3} lg={3}>
                            <a href="#" >
                                <div style={styles.price}><h6 style={styles.h6}>Discount: 15%</h6> </div>
                                <Thumbnail src="/assets/images/niagara.jpg" alt="242x200">
                                    <div style={styles.box}>
                                        <h1 style={styles.h1}>PhnomPenh Hotel </h1>
                                        <p>Niagara Falls Hotel with Family Fun Package
                                            Niagara Falls Hotel with Family Fun Package
                                        </p>

                                    </div>
                                </Thumbnail>
                            </a>
                        </Col>
                        <Col xs={12} sm={6} md={3} lg={3}>
                            <a href="#" className="box">
                                <div style={styles.price}><h6 style={styles.h6}>Discount: 10%</h6> </div>
                                <Thumbnail src="/assets/images/taza.jpg" alt="242x200">
                                    <div style={styles.box}>
                                        <h1 style={styles.h1}>Sea Foods</h1>
                                        <p>Claim this deal by linking to your eligible Visa card
                                            Pay for qualifying purchases at the merchant with your linked Visa card
                                        </p>
                                    </div>
                                </Thumbnail>
                            </a>
                        </Col>
                        <Col xs={12} sm={6} md={3} lg={3}>
                            <a href="#" className="box">
                                <div style={styles.price}><h6 style={styles.h6}>Discount: 20%</h6> </div>
                                <Thumbnail src="/assets/images/mixteco.jpg" alt="242x200">
                                    <div style={styles.box}>
                                        <h1 style={styles.h1}>Khmer Foods</h1>
                                        <p>Claim this deal by linking to your eligible Visa card
                                            Pay for qualifying purchases at the merchant with your linked Visa card</p>

                                    </div>
                                </Thumbnail>
                            </a>
                        </Col>
                        <Col  xs={12} sm={6} md={3} lg={3}>
                            <a href="#" className="box">
                                <div style={styles.price}><h6 style={styles.h6}>Discount:50%</h6> </div>
                                <Thumbnail  src="/assets/images/wicosin.jpg" alt="242x200">
                                    <div style={styles.box}>
                                        <h1 style={styles.h1}>Khmer Resort</h1>
                                        <p>No matter the season, guests can enjoy the outdoors at the 4-star Grand Geneva Resort
                                            & Spa. Winter brings skiing </p>

                                    </div>
                                </Thumbnail>
                            </a>
                        </Col>

                    </Row>
                </Grid>


            </div>
        );
    }
}
