const pool = require("./pool");

class DatabaseService {
    static executeSelectionQuery(query) {
        console.log("Executing: " + query.text + " with values: " + query.values);

        return new Promise((resolve, reject) => {
            pool.query(query)
                .then(results => {
                    if (results.rows.length <= 0) reject(new Error("Nothing found"));
                    else resolve(results.rows);
                })
                .catch(error => {
                    reject(new Error("Error fetching: " + error.message));
                });
        });
    }

    static executeUpdateQuery(query) {
        console.log("Executing: " + query.text + " with values: " + query.values);

        return new Promise((resolve, reject) => {
            pool.query(query)
                .then(results => {
                    if (results.rowCount <= 0) reject(new Error("No data changed"));
                    else resolve(results.rowCount);
                })
                .catch(error => {
                    reject(new Error("Error updating: " + error.message))
                })
        })
    }

    static executeDeleteQuery(query) {
        console.log("Executing: " + query.text + " with values: " + query.values);

        return new Promise((resolve, reject) => {
            pool.query(query)
                .then(results => {
                    if (results.rowCount <= 0) reject(new Error("No data changed"));
                    else resolve(results.rowCount);
                })
                .catch(error => {
                    reject(new Error("Error deleting: " + error.message))
                })
        })
    }

    static executeInsertionQuery(query) {
        console.log("Executing: " + query.text + " with values: " + query.values);

        return new Promise((resolve, reject) => {
            pool.query(query)
                .then(results => {
                    if (results.rowCount <= 0) reject(new Error("No data inserted"));
                    else resolve(results.rowCount);
                })
                .catch(error => {
                    reject(new Error("Error inserting: "+ error.message))
                })
        })
    }
}

module.exports = DatabaseService;