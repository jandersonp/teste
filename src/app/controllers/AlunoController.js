import Aluno from '../models/Aluno';

class AlunoController {
  async store(req, res) {
    const userExists = await Aluno.findOne({
      where: {
        nome: req.body.nome,
        matricula: req.body.matricula,
      },
    });

    if (userExists) {
      return res.status(400).json({ error: 'Aluno já existente' });
    }

    const { id, nome, matricula } = await Aluno.create(req.body);

    return res.json({ id, nome, matricula });
  }
}

export default new AlunoController();
