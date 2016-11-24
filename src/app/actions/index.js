/**
 * Created by Naseat on 11/24/2016.
 */
export function selectBook(book){
    return{
        type:'BOOK_SELECTED',
        payload:book
    }
}