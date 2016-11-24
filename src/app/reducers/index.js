/**
 * Created by Naseat on 11/24/2016.
 */
import {combineReducers} from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_actived_book';
const rootReducer=combineReducers({
    books:BooksReducer,
    activeBook:ActiveBook
});
export default rootReducer
