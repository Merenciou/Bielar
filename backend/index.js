require('dotenv').config;
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const SERVER_HOST= process.env.SERVER_HOST || 'localhost';
const DB_APIKEY= process.env.DB_APIKEY;
const express = require('express');
const app = express();

app.use(express.json());

app.listen(SERVER_PORT, ()=>{
    console.log(`Servidor rodando na porta: ${SERVER_PORT}`);
});