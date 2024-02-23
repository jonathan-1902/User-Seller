// A controller file can start with Lower case letters

const Employee = require('../models/Employee')

const createEmployee = async (req, res) => {
    try {
        const { name, email, password, phone, city } = req.body

        const employee = new Employee({
            name,
            email,
            password,
            phone,
            city
        })

        await employee.save()
        res.status(201).json(employee)

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


// Retrieving all employees at a time
const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find()
        res.status(200).json(employees)
    }
    catch (error) {
        console.error("There is an error:", error)
        res.status(500).json({ message: "server error" })
    }
}

// retrieving single employee
const singleEmployee = async (req, res) => {
    try {
        const { email, password } = req.body;
        Employee.findOne({ email: email })
            .then(user => {
                if (user) {
                    if (user.password === password) {
                        res.json("success")
                    }
                    else {
                        res.json("password is incorrect")
                    }
                }
                else {
                    res.json("user not exists");
                }
            })


        // res.status(200).json({ message: "success" });//retreiving data in the  form of json format
    }
    catch (error) {
        console.error("There is an error", error);
        res.status(500).json({ message: "Server Error" });
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


// Update Employee Details

const updateEmployee = async (req, res) => {
    try {
        const { name, email, phone, city } = req.body;

        const myEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            { name, email, phone, city }
        )

        if (!myEmployee) {
            return res.status(404).json({ message: "Employee Not found" })
        }

        res.status(200).json(myEmployee);
    }
    catch (error) {
        console.error("This is an error", error);
        res.status(500).json({ message: "Server Error" })
    }
}

// Delete an Employee

const deleteEmployee = async (req, res) => {
    try {
        const deleteEmployee = await Employee.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Record Deleted Successfully" });
    }
    catch (error) {
        console.error('This is an error', error);
        res.status(500).json({ message: "Server Error" })
    }
}


module.exports = { createEmployee, getEmployees, singleEmployee, updateEmployee, deleteEmployee }

