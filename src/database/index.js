import Sequelize from 'sequelize';

/** Models */
import Professor from '../app/models/Professor';
import Aluno from '../app/models/Aluno';
import Turma from '../app/models/Turma';

/** Configurações do BD */
import databaseConfig from '../config/database';

/** Array de models */
const models = [Professor, Aluno, Turma];

class Database {
  constructor() {
    this.init();
  }

  /** Conexao com a base de dados */
  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
