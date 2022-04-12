const { Router } = require('express');
const router = Router();
const employeesCtrl = require('../controllers/employees.controller');


//CRUD
// CREATE READ  UPDATE DELETE

router.get('/', employeesCtrl.getEmployees);
router.post('/', employeesCtrl.createEmployee);
router.get('/:id', employeesCtrl.getEmployeeId);
router.put('/:id', employeesCtrl.updateEmployee);
router.delete('/:id', employeesCtrl.deleteEmployee);

module.exports = router;  