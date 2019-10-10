import jwt from 'jsonwebtoken';
import { promisify } from 'util'; // Transforma uma função de callback em uma função async ou await

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization; // Buscando a autenticação.

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não foi enviado.' });
  }

  const [, token] = authHeader.split(' '); // Desestruturando para utilizar apenas o token após a virgula.

  try {
    // Utilizado duas funções no método promisify(dentro qual o método que irá verificar)(Os parametros são chamados para verificar).
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.UserId = decoded.id;

    // console.log(decoded);
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Toque não válido' });
  }
};
