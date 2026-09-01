
const User = require('../Models/Auth');
const bcrypt = require('bcrypt');
const {validateBvn, validateNin} = require('../kyc/kycValidate')

const customerOnboard = async (req, res) => {

    try{

         const {fullName, email, password, phone, dob, image, kycType, bvn, nin} = req.body;
         let kycResult;
         if(kycType === "bvn")
         {
           kycResult= await validateBvn(bvn);
         }
         else if (kycType === "nin")
         {
            kycResult = await validateNin(nin);
         }
         else
         {
            return res.status(400).json({message : "Invalid kyc type"})
         }
        if(kycResult.success !== true)
        {
            return res.status(400).json({ message : "Your kyc verification failed"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
         const newUser = new User(
            {
                fullName,
                email,
                password: hashedPassword,
                phone,
                dob,
                image,
                kycType,
                ...(kycType === "bvn" ? {bvn} : {nin}),
                isKycVerified:true

            }
         )

         await newUser.save();
         return res.status(200).json({ message : "New Customer Created"});

    }catch(error)
    {
        console.log(error);
    }



}


module.exports = customerOnboard;