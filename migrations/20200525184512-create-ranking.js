'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rankings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id'
        },
      },
      puntajeTotal: {
        type: Sequelize.INTEGER
      },
      puntajeBilletes: {
        type: Sequelize.INTEGER
      },
      puntajeSumas: {
        type: Sequelize.INTEGER
      },
      puntajeMultiplicacion: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.CHAR
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('rankings');
  }
};