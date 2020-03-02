import Sequelize, { Model } from 'sequelize';

class Professor extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        titulacao: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Professor;
