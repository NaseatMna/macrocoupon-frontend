/**
 * Created by Oudam on 11/7/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReflexboxGrid from './app/ReflexboxGrid';
import Navigation from './app/shared_component/Navigation';
import Login from './app/signin/Signin';
import Main_menu from './app/shared_component/Main_menu';
import injectTapEventPlugin from 'react-tap-event-plugin'; // to use some events
injectTapEventPlugin()

export default class App extends React.Component {
    render(){
        return(
            <div>
                <Navigation/>
                <Main_menu/>
                <Login/>
            </div>

        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));