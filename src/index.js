/**
 * Created by Oudam on 11/7/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './app/shared_component/Footer';
import Navigation from'./app/shared_component/Navigation';
import Company from './app/shared_component/Company';
import Diamon from './app/shared_component/Diamond_component';
import Main_Menu from './app/shared_component/Main_menu';
import Login from './app/signin/Signin';
import SidBarMenu from './app/shared_component/sidbar_menu';

export default class App extends React.Component {
    render(){
        return(
            <div>
                <Login/>
                <Navigation/>
                <Main_Menu/>
                <Diamon/>
                <Company/>
                <Footer/>
            </div>

        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));

