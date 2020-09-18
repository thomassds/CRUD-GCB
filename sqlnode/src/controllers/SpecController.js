const Doctor = require('../models/Doctor');
const Spec = require('../models/Spec');

module.exports ={
    async store(req, res){
        const { doctor_id } = req.params;
        const { description } = req.body;

        const doctor = await Doctor.findByPk(doctor_id);
        if(!doctor){
            return res.status(400).json({ error: 'Doctor not found' });
        }

        const [ spec ] = await Spec.findOrCreate({ 
            where: { description }
        });

        await doctor.addSpec(spec);

        return res.json(spec)
    },

    async index(req, res){
        const { doctor_id } = req.params;

        const doctor = await Doctor.findByPk(doctor_id, {
            include:{ association: 'specs'}
        });

        return res.json(doctor)
    }
}