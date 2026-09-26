const getNibssToken = require('./nibssService');

const registerWebhook = async (url) => {
    try {

        const nibbs = await getNibssToken();

        const response = await fetch(
            process.env.NIBSS_BASE_URL + '/webhook',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + nibbs.token
                },
                body: JSON.stringify({
                    url
                })
            }
        );

        if (!response.ok) {
            const errorData = await response.text();
            console.log("NIBSS ERROR:", errorData);

            throw new Error("Webhook registration failed");
        }

        return await response.json();

    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = registerWebhook;