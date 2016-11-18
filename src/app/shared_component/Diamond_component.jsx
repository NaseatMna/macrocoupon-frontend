import React from 'react';
import {Grid , Row,Col,Thumbnail,Button} from 'react-bootstrap';

export default class Diamon extends React.Component{

    render(){
        return(
            <div>
                <Grid>
                    <Row>
                    <Col sm={6} md={3} lg={3}>
                        <a href="#" className="box">
                        <Thumbnail src="/assets/images/niagara.jpg" alt="242x200">
                            <h3>Niagara Falls Hotel</h3>
                            <p>Niagara Falls Hotel with Family Fun Package
                                Niagara Falls Hotel with Family Fun Package
                                Quality Inn & Suites Niagara Falls
                            </p>
                            <p>
                              <span style={{color:'green',paddingLeft: '46%'}}>25% Cash back</span>
                            </p>
                        </Thumbnail>
                            </a>
                    </Col>
                    <Col sm={6} md={3} lg={3}>
                        <a href="#" className="box">
                        <Thumbnail src="/assets/images/taza.jpg" alt="242x200">
                            <h3>25% Cash Back Taza</h3>
                            <p>Claim this deal by linking to your eligible Visa card
                                Pay for qualifying purchases at the merchant with your linked Visa card
                            </p>
                            <p>
                                <span style={{color:'green',paddingLeft: '46%'}}>25% Cash back</span>
                            </p>
                        </Thumbnail>
                            </a>
                    </Col>
                    <Col sm={6} md={3} lg={3}>
                        <a href="#" className="box">
                        <Thumbnail src="/assets/images/mixteco.jpg" alt="242x200">
                            <h3>45% at  Mixteco</h3>
                            <p>Claim this deal by linking to your eligible Visa card
                                Pay for qualifying purchases at the merchant with your linked Visa card</p>
                            <p>
                                <span style={{color:'green',paddingLeft: '46%'}}>25% Cash back</span>
                            </p>
                        </Thumbnail>
                            </a>
                    </Col>
                    <Col sm={6} md={3} lg={3}>
                        <a href="#" className="box">
                        <Thumbnail src="/assets/images/wicosin.jpg" alt="242x200">
                            <h3>Grand Geneva </h3>
                            <p>No matter the season, guests can enjoy the outdoors at the 4-star Grand Geneva Resort
                                & Spa. Winter brings skiing </p>
                            <p>
                                <span style={{color:'green',paddingLeft: '46%'}}>25% Cash back</span>
                            </p>
                        </Thumbnail>
                        </a>
                    </Col>

                </Row>

                    <Row>
                        <Col sm={6} md={3} lg={3}>
                            <a href="#" className="box">
                            <Thumbnail src="/assets/images/niagara.jpg" alt="242x200">
                                <h3>Niagara Falls Hotel</h3>
                                <p>Niagara Falls Hotel with Family Fun Package
                                    Niagara Falls Hotel with Family Fun Package
                                    Quality Inn & Suites Niagara Falls
                                </p>
                                <p>
                                    <span style={{color:'green',paddingLeft: '46%'}}>25% Cash back</span>
                                </p>
                            </Thumbnail>
                                </a>
                        </Col>
                        <Col sm={6} md={3} lg={3}>
                            <a href="#" className="box">
                            <Thumbnail src="/assets/images/taza.jpg" alt="242x200">
                                <h3>25% Cash Back Taza</h3>
                                <p>Claim this deal by linking to your eligible Visa card
                                    Pay for qualifying purchases at the merchant with your linked Visa card
                                </p>
                                <p>
                                    <span style={{color:'green',paddingLeft: '46%'}}>25% Cash back</span>
                                </p>
                            </Thumbnail>
                                </a>
                        </Col>
                        <Col sm={6} md={3} lg={3}>
                            <a href="#" className="box">
                            <Thumbnail src="/assets/images/mixteco.jpg" alt="242x200">
                                <h3>45% at  Mixteco</h3>
                                <p>Claim this deal by linking to your eligible Visa card
                                    Pay for qualifying purchases at the merchant with your linked Visa card</p>
                                <p>
                                    <span style={{color:'green',paddingLeft: '46%'}}>25% Cash back</span>
                                </p>
                            </Thumbnail>
                                </a>
                        </Col>
                        <Col sm={6} md={3} lg={3}>
                            <a href="#" className="box">
                            <Thumbnail src="/assets/images/wicosin.jpg" alt="242x200">
                                <h3>Grand Geneva </h3>
                                <p>No matter the season, guests can enjoy the outdoors at the 4-star Grand Geneva Resort
                                    & Spa. Winter brings skiing </p>
                                <p>
                                    <span style={{color:'green',paddingLeft: '46%'}}>25% Cash back</span>
                                </p>
                            </Thumbnail>
                                </a>
                        </Col>
                    </Row>
                </Grid>


            </div>
        );
    }
}
