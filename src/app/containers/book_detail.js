/**
 * Created by Naseat on 11/24/2016.
 */
import React from'react';
import {connect} from 'react-redux';
class BookDetail extends React.Component{
    render(){
        if(!this.props.book){
            return(
                <div>please select book</div>
            )
        }
        return(
                <div>bookDetail: {this.props.book.title}</div>
        );
    }
}
function mapStateToProps(state){
    return{
        book:state.activeBook
    }
}
export default connect(mapStateToProps)(BookDetail)