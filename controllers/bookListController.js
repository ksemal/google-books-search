const db = require("../models");
//const axios = require("axios");
const axios = require("axios");
// Defining methods for the booksController
module.exports = {
  findBooks: function(req, res) {
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: { q: req.query, maxResults: 10 }
      })
      .then(booklist => {
        res.json(booklist.data.items);
      })
      .catch(err => console.log(err)); //.catch(err => res.status(422).json(err)); for production
  }
};
