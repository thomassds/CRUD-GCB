const { update } = require('../models/Doctor');
const Doctor = require('../models/Doctor');

module.exports ={
    async store(req, res){
        const { name, crm, phone, state, city } = req.body

        const doctor = await Doctor.create({name, crm, phone, state, city});

        return res.json(doctor)
    },
    async index(req, res){
        
        const doctor = await Doctor.findAll();

        return res.json(doctor)
    },
    async update(req, res){
        const { doctor_id } = req.params;
        const { name, crm, phone, state, city } = req.body;
        const doctor = await Doctor.update({name, crm, phone, state, city }, {where: { id: doctor_id}} );

        return res.json(doctor);
    },
    async remove(req, res){
        const { doctor_id } = req.params;
        const doctor = await Doctor.destroy({ where: { id: doctor_id}});

        return res.json();
    }
};