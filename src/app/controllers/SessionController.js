import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    // passando email e password para validar login.
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado.' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'passaword não funciona' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      // importado auth para centralizar os valores padrões. Via Payload
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
