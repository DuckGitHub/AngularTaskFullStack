const Employee = require('../models/employee')
const employeeCntr = {}

employeeCntr.getEmployees = async (req, res) => {
    const employee  = await Employee.find()

    res.json(employee)
}

employeeCntr.createEmployee = async (req, res) => {
    delete req.body._id
    
    const employee = new Employee(req.body)

    employee.save()
    res.json({ success: true })
}

employeeCntr.updateEmployee = async (req, res) => {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body)
    
    res.json(employee)
}

employeeCntr.deleteEmployee = async (req, res) => {
    const employee = await Employee.findByIdAndRemove(req.params.id)

    res.json({ success: true }).status(202)
}

employeeCntr.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id)

    res.json(employee).status(202)
}

module.exports = employeeCntr