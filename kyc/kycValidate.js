//This Controller unboards banks with email and bank name
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();  //Load env variables

const BVNValUrl = process.env.NIBSS_BASE_URL + '/validateBvn';
const NINValUrl = process.env.NIBSS_BASE_URL + '/validateNin';

const getNibssToken = require('../Services/nibssService');


//Unboard a bank (name, email)
const validateBvn = async (bvn) => {
    
    try {
        const nibbs = await getNibssToken();

        const response = await fetch(BVNValUrl,
        {
            method : "POST",

            headers: {
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + nibbs.token
               
            },
            body : JSON.stringify({
                bvn: bvn
            })
          });
        
          if(!response.ok)
            {
                console.log(response);
            }
            const data = await response.json();

            console.log(data);
            return data;
    } catch(error){
        console.log(error);
    }
}

//Unboard a bank (name, email)
const validateNin = async (nin) => {
    
    try {
        const nibbs = await getNibssToken();

        const response = await fetch(NINValUrl,
        {
            method : "POST",

            headers: {
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + nibbs.token
               
            },
            body : JSON.stringify({
                nin: nin
            })
          });
        
          if(!response.ok)
            {
                console.log(response);
            }
            const data = await response.json();

            console.log(data);
            return data;
    } catch(error){
        console.log(error);
    }
}



module.exports = {
    validateBvn, 
    validateNin
}