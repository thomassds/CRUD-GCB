const { Model, DataTypes} = require('sequelize');

class Spec extends Model {
    static init(sequelize){
        super.init({
            description: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'specs'
        })
    }

    static associate(models){
        this.belongsToMany(models.Doctor, { foreignKey: 'spec_id', through: 'doctor_specs', as: 'doctors'});
    }
}

module.exports = Spec;