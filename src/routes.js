import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
// import User from './app/models/User'; rota para teste

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', authMiddleware, UserController.update);

/*
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Rodrigo Stuani',
    email: 'rodrigo_stuani@outlook.com',
    password_hash: '4687',
  });

  return res.json(user);
});
*/

export default routes;
