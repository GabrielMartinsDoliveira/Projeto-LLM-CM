const APP_CONSTANTS = {
  DEFAULT_CONTEXT: 'Você é um especialista em front-end, capaz de responder perguntas sobre desenvolvimento web, design de interfaces e melhores práticas de programação.',
  
  DEFAULT_MODEL: 'gpt-3.5-turbo',
  
  DEFAULT_PROMPT: 'Olá! Como podemos desenvover um app hoje?',
  ERROR_MESSAGES: {
    API_CALL_FAILED: 'Não foi possível obter resposta da IA no momento, tente mais tarde.',

    MISSING_INPUT: 'Por favor, forneça uma pergunta ou mensagem.',
    
    INTERNAL_SERVER_ERROR: 'Algo deu errado. Tente novamente mais tarde.'
  },
  HEADERS: {
    CONTENT_TYPE: 'application/json'
  }
};
module.exports = APP_CONSTANTS;
