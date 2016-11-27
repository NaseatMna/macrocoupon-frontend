/**
 * Created by Oudam on 11/7/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';
//import injectTapEventPlugin from 'material-ui';
import Footer from './app/shared_component/Footer';
import Navigation from'./app/shared_component/Navigation';
import Company from './app/shared_component/Company';
import Diamon from './app/shared_component/Diamond_component';
import Main_Menu from './app/shared_component/Main_menu';
import Login from './app/signin/Signin';
import ReflexboxGrid from './app/ReflexboxGrid';
import BooksList from './app/containers/book-list';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from'./app/reducers/index';
import BookDetail from'./app/containers/book_detail';
import App from'./app/containers/App';
import SidBarMenu from './app/shared_component/sidbar_menu';
injectTapEventPlugin();
//let store = createStore(rootReducer)
//export default class App extends React.Component {
//    render(){
//
//        return(
//
//            <div>
//                <Provider store={store}>
//                    <App />
//                </Provider>
//                {/*<Navigation/>
//                <Main_Menu/>
//                <Diamon/>
//                <Company/>
//                <Footer/>*/}
//
//            </div>
//
//        )
//    }
//}
//ReactDOM.render(
//    <Provider store={store}>
//        <App />
//    </Provider>
//    , document.getElementById('app'));
//=======
injectTapEventPlugin();

export default class App extends React.Component {
    render(){
        return(
            <div>

                <Navigation/>
                <SidBarMenu/>
                <Main_Menu/>
                <Diamon/>
                <Company/>
                <Footer/>
            </div>

        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));

