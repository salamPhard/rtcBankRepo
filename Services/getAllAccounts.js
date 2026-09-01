const dotenv = require('dotenv');
dotenv.config();  //Load env variables

const baseUrl = process.env.NIBSS_BASE_URL +`/accounts`;

const getNibssToken = require('../Services/nibssService');

const getAllAccountService = async () => {
    try {

        const nibbs = await getNibssToken();

        const response = await fetch(baseUrl,
        {
            method : "GET",

            headers: {
                "Content-Type": "application/json",
                "Authorization" : "Bearer " + nibbs.token
            }
        }
        );
       
        if (!response.ok) {
            const errorData = await response.text();
            console.log("NIBBS ERROR", errorData);
            throw new Error("Error fetching accounts");
        }

        const data = await response.json();

        return data;
    }catch (error) {
        console.log(error);
    }
}


module.exports = getAllAccountService;