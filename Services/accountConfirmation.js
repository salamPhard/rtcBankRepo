const dotenv = require('dotenv');
dotenv.config();  //Load env variables

const getNibssToken = require('../Services/nibssService');

const confirmAccountInfo = async (accountNum) => {
    try {

        const nibbs = await getNibssToken();

        const baseUrl =
            process.env.NIBSS_BASE_URL +
            `/account/name-enquiry/${accountNum}`;

        const response = await fetch(baseUrl,
        {
            method : "GET",

            headers: {
                "Content-Type": "application/json",
                "Authorization" : "Bearer " + nibbs.token
            }
        }
        );
        console.log(response.status);
        if (!response.ok) {
    const errorData = await response.text();

    console.log("NIBSS ERROR STATUS:", response.status);
    console.log("NIBSS ERROR RESPONSE:", errorData);

    throw new Error("Account confirmation failed");
}

        const data = await response.json();

        return data;
    }catch (error) {
        console.log(error);
    }
}


module.exports = confirmAccountInfo;