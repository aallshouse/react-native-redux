export const AddBook = 'AddBook';

export function addBook(book) {
    return {
        type: AddBook,
        book
    };
};