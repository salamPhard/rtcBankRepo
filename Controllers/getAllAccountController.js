const User = require('../Models/Auth');
const getAllAccountsInfo = require('../Services/getAllAccounts');

const fetchAccounts = async (req, res) => {
    try {

        console.log("Trying to fetch accounts");
        const allAccounts = await getAllAccountsInfo();
        console.log(allAccounts);

        return res.status(200).json({
            message: "All Customers Accounts fetched successfully",
            data: allAccounts
        });

    } catch (error) {
        console.log("Accounts fetching error", error);

        return res.status(500).json({
            message: "Error fetching accounts",
            error:error.message
        });
    }
};

module.exports = fetchAccounts;