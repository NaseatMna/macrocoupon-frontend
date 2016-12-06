import React from 'react';
import { Button,FormGroup,Form,Col,ControlLabel,FormControl,Checkbox ,Grid,Row } from 'react-bootstrap';

import Header from './../shared_component/Navigation/Header';
const styles={
    style:{
        marginTop:'36px' ,
        background: 'rgb(251, 251, 251)'
    }
}
export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.connectFacebook = this.connectFacebook.bind(this);

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '343269546033273',
                xfbml      : true,
                version    : 'v2.8'
            });
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    connectFacebook(){
        FB.login(("/me",function (response) {
            if(response.status === "connected"){
                var strobj;
                var obj;
                strobj=JSON.stringify(response);
                // respose include authResponse,accessToken,userID,expiresIn,signedRequest,status
                obj=JSON.parse(strobj);

                if(obj.authResponse){
                    FB.api("/me?fields=id,first_name,last_name,gender,link,name,picture","GET",function(response){
                        var strobj=JSON.stringify(response);
                        var obj=JSON.parse(strobj);
                        //alert(obj.name); // get data from object json
                        console.log("Facebook Data: "+JSON.stringify(response));
                    });
                }
            }else{
                alert("Opps! Cannot connect to Facebook");
            }

        }),null);
    }


    render(){
        return(
            <div>
                <Header/>
                <Grid style={styles.style}>
                <Row>
                    <Col sm={12} md={6}>
                        <h3>LogIn</h3>
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="email" placeholder="Email" />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="Password" />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Checkbox>Remember me</Checkbox>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit">
                                        Sign in
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col sm={12} md={6}>
                        <span></span>
                        <a className="btn btn-block btn-social btn-twitter">
                           <i class="fa fa-facebook">Sign in with Twitter</i>
                        </a>
                    </Col>
                    <Col sm={12} md={6}>
                        <span></span>
                        <a className="btn btn-block btn-social btn-facebook">
                            <span className="fa fa-facebook"></span> Sign in with Twitter
                        </a>
                    </Col>
                </Row>
               </Grid>
                {/*<Button bsStyle="primary" onClick={this.connectFacebook}>Login with Facebook</Button>*/}
            </div>
        );
    }
}