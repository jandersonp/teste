import Turma from '../models/Turma';
import Aluno from '../models/Aluno';

class TurmaController {
  /** Cadastro de Aluno em uma turma */
  async store(req, res) {
    const { aluno_id } = req.params;
    const { codigo, sala, data_abertura, data_encerramento } = req.body;

    const aluno = await Aluno.findByPk(aluno_id);

    if (!aluno) {
      return res.status(400).json({ error: 'Aluno não encontrado' });
    }

    const turma = await Turma.create({
      codigo,
      sala,
      data_abertura,
      data_encerramento,
      aluno_id,
    });

    return res.json(turma);
  }
}

export default new TurmaController();
