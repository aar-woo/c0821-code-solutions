const express = require('express')
const app = express();
const pg = require('pg');

const db = new pg.Pool({
    connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
    ssl: {
        rejectUnauthorized: false
    }
});