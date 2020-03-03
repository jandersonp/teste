import { Router } from 'express';

import AlunoController from './app/controllers/AlunoController';

const routes = new Router();

routes.get('/alunos', AlunoController.store);

export default routes;
