import { Router } from 'express';

/** Controllers */
import AlunoController from './app/controllers/AlunoController';
import ProfessorController from './app/controllers/ProfessorController';
import TurmaController from './app/controllers/TurmaController';

const routes = new Router();

/** Rotas */
routes.post('/alunos', AlunoController.store);
routes.get('/alunos', AlunoController.index);

routes.post('/alunos/:aluno_id/turmas', TurmaController.store);

routes.post('/professores', ProfessorController.store);

export default routes;
