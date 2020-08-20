require('dotenv').config();

module.exports = {
  db: {
    uri: process.env.MONGO_URI
  },
  express: {
    port: process.env.PORT || 3001
  }
};