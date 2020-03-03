import Aluno from '../models/Aluno';

class AlunoController {
  /** Cadastro de Aluno */
  async store(req, res) {
    const alunoExists = await Aluno.findOne({
      where: {
        nome: req.body.nome,
        matricula: req.body.matricula,
      },
    });

    if (alunoExists) {
      return res.status(400).json({ error: 'Aluno já existente' });
    }

    const { id, nome, matricula } = await Aluno.create(req.body);

    return res.json({ id, nome, matricula });
  }

  /** Listagem de Alunos */
  async index(req, res) {
    const users = await Aluno.findAll({
      where: {},
    });

    return res.json(users);
  }
}

export default new AlunoController();
