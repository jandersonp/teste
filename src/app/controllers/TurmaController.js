import Turma from '../models/Turma';
import Aluno from '../models/Aluno';

class TurmaController {
  /** Cadastro de Professor */
  async store(req, res) {
    const { aluno_id } = req.params;
    const {
      codigo,
      sala,
      dataAbertura,
      dataEncerramento,
      professores_id,
    } = req.body;

    const aluno = await Aluno.findByPk(aluno_id);

    if (!aluno) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    const turma = await Turma.create({
      codigo,
      sala,
      dataAbertura,
      dataEncerramento,
      aluno_id,
      professores_id,
    });

    return res.json(turma);
  }
}

export default new TurmaController();
