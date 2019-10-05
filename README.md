## Iniciando o back-end da api GoBarber ##

**Estrutura do projeto:**
  * Configurar estrutura da api;
  * Configurar o nodemon & sucrase;
  * Conceitos e configuração:
    * Docker;
    * Sequelize;
    * Arquitetura MVC;
    * ESlint, Prettier & EditorConfig;
    * Migration de usuário;
    * Model de usuário - loader de models;
    * Gerando hash de senha;
      - Configurando o bcrypt (extenção) para enviar com segurança geração do hash para o banco de dados.

      $ yarn add bcrytpjs

    * JWT - Json Web Token (Autenticação);
      - é uma metodologia, uma forma de efetuar uma autenticação em api's Rest (Serviços RestFull) na criação, que são comunicados atraves de Json.

      - Criando uma sessão de rota:

          POST http://api.com/sessions

          {
            nome: "Rodrigo Stuani,
            password: "kolelaje(123)"
          }
          Gerado um token para obtesão de dados.
           - Headers (tipo de token - algoritmo);
           - Payload (dados adicionais);
           - Assinatura (garante que token não foi alterado por fora).

    * Middleware de autenticação;
  * Implementação do cadastro de usuários;
  * Validação dos dados de entrada.

