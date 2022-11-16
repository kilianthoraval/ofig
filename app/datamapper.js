const client = require('./database');

const dataMapper = {
   async getAllFigurines(){
        const sqlQuery = `SELECT * FROM figurine;`;
        let result; // result est le retour de ma méthode

        try { // le code a surveillé / ce qui peut planter

            // await va permettre d'attendre la réponse du serveur de BDD avant de continuer
            const sqlResult = await client.query(sqlQuery);
            result = sqlResult.rows;
        }
        catch (error) {
            // comment on a réagi en cas d'erreur

            // 1- Logguer l'erreur
            console.error(error);
        }

        /*
            si tout se passe bien, result est un tableau de contacts
            s'il y a un soucis, result est null
        */
        return result;
    },

    async getOneFigurine(id){
        const sqlQuery = `SELECT * FROM contact WHERE id=${id};`;

        let result;
        try {
            const sqlResult = await client.query(sqlQuery);
            result = sqlResult.rows[0];
        }
        catch (error) {
            console.error(error);
        }

        // console.log("getContact : ", result.rows);
        return result;

    }

};

module.exports = dataMapper;