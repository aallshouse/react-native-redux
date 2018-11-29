import { AddBook } from '../actions';

const initialState = {
    books: [
        { name: 'East of Eden', author: 'John Steinbeck' }
    ]
};

const bookReducer = (state = initialState, action) => {
    switch(action.type) {
        case AddBook:
            return {
                books: [
                    ...state.books,
                    action.book
                ]
            };
        default:
            return state;
    }
};

export default bookReducer;