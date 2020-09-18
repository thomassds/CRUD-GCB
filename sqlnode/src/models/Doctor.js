const { Model, DataTypes} = require('sequelize');

class Doctor extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            crm: DataTypes.INTEGER,
            phone: DataTypes.DOUBLE,
            state: DataTypes.STRING,
            city: DataTypes.STRING
        },{
            sequelize
        })
    }
    static associate(models){
        this.belongsToMany(models.Spec, { foreignKey: 'doctor_id', through: 'doctor_specs', as: 'specs'});
    }
}

module.exports = Doctor;