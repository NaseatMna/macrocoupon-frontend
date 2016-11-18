import React from 'react';
import { Button } from 'react-bootstrap';

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
                <h3>LogIn</h3>
                <div id="status"></div>
                <Button bsStyle="primary" onClick={this.connectFacebook}>Login with Facebook</Button>
            </div>
        );
    }
}