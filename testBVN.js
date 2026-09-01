const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();  //Load env variables

const {validateBvn} = require('./kyc/kycValidate');

const checkBvn = async (bvn) => {
    try 
    {
         
    const data = await validateBvn(bvn);
    
    console.log(data);
    return data;
    }catch(error){
        console.log(error);
    }
   
}

checkBvn("12345671111");
