const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();  //Load env variables

const getNibssToken = require('./Services/nibssService');

const getNibbs = async () => {
    try 
    {
         
    const data = await getNibssToken();
    
    console.log(data);
    return data;
    }catch(error){
        console.log(error);
    }
   
}

getNibbs();
