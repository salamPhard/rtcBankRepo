const User = require('../Models/Auth');
const accountCreationService = require('../Services/accountCreation');

const createCustomerAccount = async (req, res) => {
try{

    const {email} = req.body;

  //Find customer if present to create a single account
const customer = await User.findOne({email});
if(!customer){
   return res.status(400).json({message : "Customer not found"});
}
if(customer.accountNumber)
{
    return res.status(400).json({message : "You can only create one account number"});
}
const KycType = customer.kycType === "bvn" ? "bvn" : "nin";
const kycID = customer.kycType === "bvn" ? customer.bvn : customer.nin;
const dob = customer.dob;

const create  = await accountCreationService(KycType, kycID,dob);

//Get the accountNumber and save
const accountNumber = create.account.accountNumber;

customer.accountNumber = accountNumber;

await customer.save();
return res.status(200).json({
    message: "Account created successfully",
    accountNumber: accountNumber});
}catch(error){
    console.log(error);
}
}


module.exports = createCustomerAccount;