const registerWebhookService =
    require('../Services/registerWebhook');

const registerWebhook = async (req, res) => {
    try {

        const { url } = req.body;

        const result =
            await registerWebhookService(url);

        return res.status(200).json(result);

    } catch (error) {

        return res.status(500).json({
            message: "Webhook registration failed",
            error: error.message
        });
    }
};

module.exports = registerWebhook;