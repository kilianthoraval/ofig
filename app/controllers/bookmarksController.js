const path = require('path');

const bookmarksController = {

  // méthode pour afficher les favoris
  bookmarksPage: (req, res) => {
    res.render("favoris")
  },

  addFigurine: (req, res) => {
    const bookmarksID = req.params.id;
      const bookmark = dataMapper.getOneFigurine(bookmarksID);
   
      if (bookmark) {
         
          res.render("bookmarks", {
              bookmark
          });
      }
      else {
          res.status(500).render("500");
      }
  }


};


module.exports = bookmarksController;
