const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();  //Load env variables

const {validateNin} = require('./kyc/kycValidate');

const checknin = async (nin) => {
    try 
    {
         
    const data = await validateNin(nin);
    
    console.log(data);
    return data;
    }catch(error){
        console.log(error);
    }
   
}

checknin("63034573811");
