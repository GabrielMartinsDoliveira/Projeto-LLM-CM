const logger = require('../config/logger');
const { ERROR_MESSAGES } = require('../config/constants');

/**
 * Middleware de tratamento global de erros para Express.
 * 
 * Este middleware captura erros não tratados que ocorrem durante o processamento das requisições
 * e envia uma resposta JSON padronizada ao cliente, além de registrar o erro no log.
 * 
 * @param {Object} err - Objeto de erro capturado.
 * @param {Object} req - Objeto de requisição do Express.
 * @param {Object} res - Objeto de resposta do Express.
 * @param {Function} next - Função para passar o controle ao próximo middleware.
 */
const errorHandler = (err, req, res, next) => {
  logger.error(`Erro global capturado: ${err.message}`);
  res.status(500).json({
    error: ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
    detalhes: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};

module.exports = errorHandler;