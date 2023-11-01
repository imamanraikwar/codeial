import express from 'express';
import mongoose from "mongoose";
import ejs from 'ejs';
import colors from  'colors';
import connectDB from './config/mongoose.js';
import authRoute from './routes/Routes_index.js'
import path from 'path';
import bodyParser from 'body-parser';


connectDB();


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./assets'));

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',authRoute);

const PORT = 8001;
app.listen(PORT,()=>{
    try {
        console.log(`Todo app is running on port ${PORT}`.red);
    } catch (error) {
        console.log('Error in running the server'.bgGreen.red);
    }
})