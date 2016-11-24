import React from 'react';
import BooksList from './book-list';
import BookDetail from './book_detail';

export default class App extends React.Component {
    render(){
        return(
            <div>
                <BooksList/>
                <BookDetail />
            </div>
        )
    }
}