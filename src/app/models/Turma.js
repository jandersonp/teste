import Sequelize, { Model } from 'sequelize';

class Turma extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: Sequelize.STRING,
        sala: Sequelize.STRING,
        data_abertura: Sequelize.DATE,
        data_encerramento: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
    this.belongsTo(models.Professor, {
      foreignKey: 'professor_id',
      as: 'professor',
    });
  }
}

export default Turma;
