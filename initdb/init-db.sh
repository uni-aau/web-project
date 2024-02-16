#!/bin/bash
set -e

# Führe SQL-Skripte aus, um Datenbankschemata und -daten zu initialisieren
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    \i /docker-entrypoint-initdb.d/create_tables.sql
    \i /docker-entrypoint-initdb.d/seed_data.sql
    \i /docker-entrypoint-initdb.d/test.sql
EOSQL

