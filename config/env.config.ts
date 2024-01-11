import path from 'path';

require('dotenv').config({path:path.resolve(__dirname,'../..env')});

const {NODE_ENV,PORT,DATABASE_URL} = process.env;

export default {NODE_ENV,PORT:parseInt(PORT ?? "8081",10),DATABASE_URL}