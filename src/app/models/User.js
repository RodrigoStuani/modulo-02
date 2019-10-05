import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    // Atraves do Hook é liberado eventos que fará executar as ações automaticas.
    this.addHook('beforeSave', async user => {
      if (user.password) {
        // Verifica se há um password para geração do password com hash.
        user.password_hash = await bcrypt.hash(user.password, 8); // Definido tamanho de rounds e gerar o hash.
      }
    });
    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
