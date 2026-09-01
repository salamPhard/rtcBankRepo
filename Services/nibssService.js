const apiKey = process.env.NIBSS_API_KEY
const apiSecret = process.env.NIBSS_API_SECRET
const baseUrl = process.env.NIBSS_BASE_URL + '/auth/token';


const getNibssToken = async () => {
    try {
        const response = await fetch(baseUrl,
        {
            method : "POST",

            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                apiKey, 
                apiSecret
            })
        }
        );
        console.log(response.status);
        if(!response.ok)
        {
            throw new Error("Error generation token");
        }

        const data = await response.json();

        return data;
    }catch (error) {
        console.log(error);
    }
}


module.exports = getNibssToken;