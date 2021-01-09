import React from 'react';
import { connect } from 'react-redux';
import './BookList.css';

/**
 * Rendering the Book Details once available in the store
 * @param {*} bookList 
 */
function renderBooks(bookList) {
    return (
        <ul className='book-list'>
            {bookList.map((book) => {
                return <li key={book.id}>{book.name}</li>
            })}
        </ul>
    )
}
/**
 * Render message when there is no User selected.
 */
const renderErr = () => (
    <h3>Select a User to see the list of the Books</h3>
);
/**
 * Book List Component for a particular User selected from the UserList 
 * from the left panel.
 */
const BookList = ({ bookList }) => {
    /**
     * useEffect() for getting the data from the DB 
     * useState() for setting the boolean flag to show the details rather than update/fetch from Store.
     * use that flag to render the component to show the book details 
     */
    return (
        <div className="book-container" >
            {Array.isArray(bookList) && bookList.length > 0 ? renderBooks(bookList) : renderErr()}
        </div>
    );
}
/**
 * Getting the BookList from the Store for the selected user.
 * @param {*} store 
 */
function getBookList(store) {
    return {
        bookList: store.bookList
    }
}
export default connect(getBookList)(BookList);