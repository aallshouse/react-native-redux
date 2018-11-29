import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { addBook } from './actions';

import { connect } from 'react-redux';

const initialState = {
  name: '',
  author: ''
};

class Books extends React.Component {
  state = initialState;

  updateInput = (key, value) => {
    this.setState({ [key]: value });
  }

  addBook = () => {
    console.log('add book button pressed');

    this.props.dispatchAddBook(this.state);
    this.setState(initialState);
  }

  render() {
    const { books } = this.props;

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={styles.title}>Books</Text>
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={styles.booksContainer}
        >
          {
            books.map((book, index) => (
              <View style={styles.book} key={index}>
                <Text style={styles.name}>{book.name}</Text>
                <Text style={styles.author}>{book.author}</Text>
              </View>
            ))
          }
        </ScrollView>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={val => this.updateInput('name', val)}
              placeholder='Book Name'
              value={this.state.name}
            />
            <TextInput
              style={styles.input}
              onChangeText={val => this.updateInput('author', val)}
              placeholder='Author Name'
              value={this.state.author}
            />
          </View>
            <TouchableOpacity onPress={this.addBook}>
              <View style={styles.addButtonContainer}>
                <Text style={styles.addButton}>+</Text>
              </View>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  booksContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flex: 1
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  book: {
    padding: 20
  },
  name: {
    fontSize: 18
  },
  author: {
    fontSize: 14,
    color: '#999'
  },
  inputContainer: { // C
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopColor: '#ededed',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100
  },
  inputWrapper: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  input: {
    padding: 7,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginBottom: 5
  },
  addButton: {
    fontSize: 28,
    lineHeight: 28
  },
  addButtonContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#ededed',
    marginLeft: 10,
    justifyContent: 'center', //vertically center
    alignItems: 'center', //horizontally center
    borderRadius: 20
  }
});

const mapDispatchToProps = {
  dispatchAddBook: (book) => addBook(book)
}

const mapStateToProps = (state) => ({
  books: state.bookReducer.books
})

export default connect(mapStateToProps, mapDispatchToProps)(Books)