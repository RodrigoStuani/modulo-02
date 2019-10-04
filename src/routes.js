import { Router } from 'express';
import UserController from './app/controllers/UserController';
// import User from './app/models/User'; rota para teste

const routes = new Router();

routes.post('/users', UserController.store);

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
