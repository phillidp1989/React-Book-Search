const axios = require("axios");
const key = process.env.API_KEY;

const getBooks = async (query) => {
  try {
    const results = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`
    );
    return results;
  } catch (err) {
    console.error('ERROR - API.js - getBooks', err);
  }
};

module.exports = getBooks;