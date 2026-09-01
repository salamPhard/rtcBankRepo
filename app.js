const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();  //Load env variables

app.use(express.json());  //middleware to parse json


const PORT = process.env.PORT || 3000;

const connectDB = require('./Config/dbConfig');
connectDB();  //connect to MongoDB


const unboardRoute = require('./Routes/unboardingRoutes');
const accountRoute = require('./Routes/accountRoutes');
const accountConfirmRoute = require('./Routes/accountConfirmRoutes');
const accountBalanceRoute = require('./Routes/accountBalanceRoutes');
const fundTransfer = require('./Routes/fundTransferRoutes');
const transactionRoute = require('./Routes/transactionRoutes');
const getAllAccountsRoute = require('./Routes/getAllAccountsRoutes');






app.use('/account', getAllAccountsRoute);
app.use('/account', transactionRoute);
app.use('/customer', unboardRoute);
app.use('/account', accountRoute);
app.use('/account', accountConfirmRoute);
app.use('/account', accountBalanceRoute)
app.use('/account', fundTransfer);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});