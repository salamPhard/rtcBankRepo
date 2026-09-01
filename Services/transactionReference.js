const dotenv = require('dotenv');
dotenv.config();  //Load env variables

const getNibssToken = require('../Services/nibssService');

const transactionRefService = async (ref) => {
    try {

        const nibbs = await getNibssToken();

        const baseUrl =
            process.env.NIBSS_BASE_URL +
            `/transaction/${ref}`;

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
            throw new Error("Transaction ref not found");
        }

        const data = await response.json();

        return data;
    }catch (error) {
        console.log(error);

        throw error;
    }
}


module.exports = transactionRefService;