const dotenv = require('dotenv');
dotenv.config();  //Load env variables

const baseUrl = process.env.NIBSS_BASE_URL + '/account/create';
const getNibssToken = require('../Services/nibssService');

const createAccount = async (kycType, kycID, dob) => {
    try {

        const nibbs = await getNibssToken();
        const response = await fetch(baseUrl,
        {
            method : "POST",

            headers: {
                "Content-Type" : "application/json",
                Authorization : "Bearer " + nibbs.token
            },
            body : JSON.stringify({
                kycType, 
                kycID,
                dob
            })
        }
        );
        console.log(response.status);
         if (!response.ok) {
    const errorData = await response.text();

    console.log("NIBSS ERROR STATUS:", response.status);
    console.log("NIBSS ERROR RESPONSE:", errorData);

    throw new Error("Account creation failed");
}


        const data = await response.json();

        return data;
    }catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = createAccount;