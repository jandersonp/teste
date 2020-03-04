import Professor from '../models/Professor';

class ProfessorController {
  /** Cadastro de Professor */
  async store(req, res) {
    const professorExists = await Professor.findOne({
      where: {
        nome: req.body.nome,
        titulacao: req.body.titulacao,
      },
    });

    if (professorExists) {
      return res.status(400).json({ error: 'Professor já existente' });
    }

    const { id, nome, titulacao } = await Professor.create(req.body);

    return res.json({ id, nome, titulacao });
  }

  /** Listagem de professores */
  async index(req, res) {
    const listProfessor = await Professor.findAll();

    return res.json({ listProfessor });
  }
}

export default new ProfessorController();
