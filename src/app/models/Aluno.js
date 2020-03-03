import Sequelize, { Model } from 'sequelize';

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        matricula: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Aluno;
