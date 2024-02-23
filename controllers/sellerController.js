const Seller = require('../models/Seller')

const createSeller = async (req, res) => {
    try {
        const { name, email, password, phone, companyName } = req.body

        const seller = new Seller({
            name,
            email,
            password,
            phone,
            companyName
        })

        await seller.save()
        res.status(201).json(seller)

        // 200 - success status code
        //300 - redirection status code
        //400 - request status code
        //500- database server status code
    }
    catch (error) {
        console.error("There is an error:", error)
        res.status(500).json({ message: 'Server Error' });
    }
}

const getSeller = async (req, res) => {
    try {
        const { email, password } = req.body;
        Seller.findOne({ email: email })
            .then(user => {
                if (user) {
                    if (user.password === password) {
                        res.json("success");
                    }
                    else {
                        res.json("password is incorrect");
                    }
                }
                else {
                    res.json('User not exists');
                }
            })
    }
    catch (error) {
        console.error("There is an error:", error)
        res.status(500).json({ message: 'Server Error' });
    }
}
module.exports = { createSeller, getSeller }
