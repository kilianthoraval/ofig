const path = require('path');
const dataMapper = require("../datamapper");

const mainController = {
 homePage: async (req, res) => {

    const figurines = await dataMapper.getAllFigurines();
    if (figurines) {
        res.render("accueil", {
          figurines
        });
    }
    else {
    res.status(500).render("500");
    }
      
    
  },

  articlePage: async (req, res) => {
    const figurineID = req.params.id;
    const figurine = await dataMapper.getOneFigurine(figurineID);
 
    if (figurine) {
       
        res.render("article", {
            figurine
        });
    }
    else {
        res.status(500).render("500");
    }
}
};


module.exports = mainController;
