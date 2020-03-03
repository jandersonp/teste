/** Objeto de cofiguração da minha base de dados */
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'teste',
  database: 'database_teste',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
