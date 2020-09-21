const express = require('express');

const DoctorController = require('./controllers/DoctorController');
const SpecController = require('./controllers/SpecController');
const routes = express.Router();

routes.post('/doctors', DoctorController.store)
routes.get('/doctors', DoctorController.index)
routes.put('/doctors/:doctor_id', DoctorController.update)
routes.delete('/doctors/:doctor_id', DoctorController.remove)

routes.get('/doctors/:doctor_id/specs', SpecController.index);
routes.post('/doctors/:doctor_id/specs', SpecController.store);
routes.delete('/doctors/:doctor_id/specs/:spec_id', SpecController.delete);

module.exports = routes;