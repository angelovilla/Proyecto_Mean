const employeesCtrl = {}
const Employee = require('../models/Employee')

employeesCtrl.getEmployees = async (req, res) => {
  const employees = await Employee.find()
  res.json(employees)
}

employeesCtrl.createEmployee = async (req, res) => {
  const employee = new Employee(req.body)
  await employee.save()
  res.json({
    status: 'Employee Saved'
  })
}

employeesCtrl.getEmployeeId = async (req, res) => {
  const employee = await Employee.findById(req.params.id)
  res.json(employee)
}

employeesCtrl.updateEmployee = async (req, res) => {
  const { id } = req.params
  const employee = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  }
  await Employee.findByIdAndUpdate(id, { $set: employee }, { new: true })
  res.json({
    status: 'Employee Updated'
  })
}

employeesCtrl.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndRemove(req.params.id)
  res.json({
    status: 'Employee Deleted'
  })
}

module.exports = employeesCtrl;