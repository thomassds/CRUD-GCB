'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('doctor_specs',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      doctor_id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'doctors', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      spec_id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'specs', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('doctor_specs');
  }
};
