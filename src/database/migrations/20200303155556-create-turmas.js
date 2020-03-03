module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('turmas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'alunos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      professor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'professores', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sala: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dataAbertura: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      dataEncerramento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('turmas');
  },
};
