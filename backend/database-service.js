const pool = require("./pool");

class DatabaseService {
    static executeSelectionQuery(query) {
        console.log("Executing: " + query.text + " with values: " + query.values);

        return new Promise((resolve, reject) => {
            pool.query(query)
                .then(results => {
                    if (results.rows.length <= 0) reject(new Error("Now rows found to select"));
                    else resolve(results.rows);
                })
                .catch(error => {
                    reject(new Error("Error fetching product: " + error.message));
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
                    reject(error.message)
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
                    reject(error.message)
                })
        })
    }
}

module.exports = DatabaseService;