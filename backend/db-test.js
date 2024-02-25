const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: '5433',
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Fehler beim Herstellen der Verbindung zur Datenbank', err.stack);
    }
    console.log('Verbindung zur Datenbank erfolgreich hergestellt');

    // Führen Sie hier Ihre SQL-Abfragen aus oder schließen Sie einfach die Verbindung
    client.query('SELECT NOW()', (err, result) => {
        release(); // Verbindung freigeben
        if (err) {
            return console.error('Fehler bei der Ausführung der Abfrage', err.stack);
        }
        console.log(result.rows); // Zeigt das Ergebnis der Abfrage an, z.B. das aktuelle Datum und die Uhrzeit
    });
});
