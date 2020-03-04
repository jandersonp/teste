import { Router } from 'express';

/** Controllers */
import AlunoController from './app/controllers/AlunoController';
import ProfessorController from './app/controllers/ProfessorController';
import TurmaController from './app/controllers/TurmaController';

const routes = new Router();

/** Rotas */
routes.post('/alunos', AlunoController.store);
routes.get('/alunos', AlunoController.index);
// routes.put('/alunos/:id', AlunoController);
// routes.delete('/alunos/:id', AlunoController);

routes.post('/alunos/:aluno_id/turmas', TurmaController.store);

routes.post('/professores', ProfessorController.store);
routes.get('/professores', ProfessorController.index);
// routes.put('/professores/:id', ProfessorController);
// routes.delete('/professores/:id', ProfessorController);

export default routes;
