const client = require('./database');

const dataMapper = {
   async getAllFigurines(){
        const sqlQuery = "SELECT * FROM figurine;";
        let result;

        try {
            const sqlResult = await client.query(sqlQuery);
            result = sqlResult.rows;
        }
        catch (error) {
            console.error(error);
        }
        return result;
    },

    async getOneFigurine(id){
        const sqlQuery = `SELECT * FROM figurine WHERE id=${id};`;

        let result;
        try {
            const sqlResult = await client.query(sqlQuery);
            result = sqlResult.rows[0];
        }
        catch (error) {
            console.error(error);
        }
        return result;

    }

};

module.exports = dataMapper;