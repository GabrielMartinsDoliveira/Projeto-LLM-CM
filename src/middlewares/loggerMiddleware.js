const chalk = require('chalk');

/**
 * Middleware de logger para Express.
 * 
 * Este middleware registra no console todas as requisições recebidas pela aplicação,
 * mostrando o horário, o método HTTP e a URL acessada, com cores para facilitar a leitura.
 * 
 * @param {Object} req - Objeto de requisição do Express.
 * @param {Object} res - Objeto de resposta do Express.
 * @param {Function} next - Função para passar o controle ao próximo middleware.
 */
const loggerMiddleware = (req, res, next) => {
  const time = new Date().toISOString();
  console.log(
    `${chalk.gray(`[${time}]`)} ${chalk.cyan(req.method)} ${chalk.yellow(req.originalUrl)}`
  );
  next();
};

module.exports = loggerMiddleware;