import axios from 'axios';

export default {
  // Gets all books
  getBooks: async () => {
    try {
      return await axios.get("/api/books");      
    } catch (err) {
      console.error('ERROR - API.js - getBooks', err);
    }
  },  
  // Delete book using req.params.id
  deleteBook: async id => {
    try {
      return await axios.delete("/api/books/" + id);      
    } catch (err) {
      console.error('ERROR - API.js - deleteBook', err);
    }
  },
  // Saves a book to the database
  saveBook: async bookData => {
    try {
      return await axios.post("/api/books", bookData);      
    } catch (err) {
      console.error('ERROR - API.js - saveBook', err);
    }
  }
};