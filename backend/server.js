let express = require('express');
let cors = require('cors');

const app = express();
app.use(express.static('public')); // host public folder
app.use(cors()); // Acccess-Control-Allow-Origin: *

const pool = require('./pool');

const session = require('express-session'); // Implement session based authentication (TODO)
const pgSession = require('connect-pg-simple')(session); // Stare session data in PostgreSQL DB

/* For json parsing if needed
let bodyParser = require('body-parser');
app.use(bodyParser.json());
*/

// Session Stuff in blatt-6/ex4

app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('First structure, without frontend!');
})

let port = 3000;
app.listen(port);
console.log("Server running at: http://localhost:" + port);
