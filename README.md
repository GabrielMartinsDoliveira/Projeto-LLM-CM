# Chat Controller API

## Descrição
Controller responsável por gerenciar a interação com modelos de linguagem (LLM), processando mensagens dos usuários e retornando respostas inteligentes.

## Endpoint Principal

### `POST /api/chat`

**Request:**
```json
{
  "message": "Sua mensagem aqui"
}
Responses:

Status Code	Descrição	Exemplo de Response
200	Sucesso	{"resposta": "Resposta da IA"}
400	Mensagem vazia ou inválida	{"error": "Por favor, forneça uma pergunta ou mensagem."}
500	Erro no servidor	{"error": "Não foi possível obter resposta da IA no momento, tente mais tarde."}
Configurações
Constantes Principais
javascript
{
  DEFAULT_CONTEXT: "Você é um especialista em front-end...",
  DEFAULT_MODEL: "gpt-3.5-turbo",
  DEFAULT_PROMPT: "Olá! Como podemos desenvolver um app hoje?"
}
Mensagens de Erro
Constante	Mensagem
API_CALL_FAILED	"Não foi possível obter resposta da IA no momento, tente mais tarde."
MISSING_INPUT	"Por favor, forneça uma pergunta ou mensagem."
INTERNAL_SERVER_ERROR	"Algo deu errado. Tente novamente mais tarde."
Fluxo de Operação
Validação de entrada:

Verifica se message existe e não está vazia

Retorna erro 400 se inválida

Processamento:

Encaminha mensagem para llmService.enviarPrompt()

Loga sucesso/erro usando o sistema de logger

Retorno:

Resposta da IA (200)

Erros de servidor (500)

Dependências
../services/llmService: Serviço de integração com o LLM

../config/logger: Sistema de logging

../config/constants: Constantes da aplicação

Exemplo de Uso
javascript
const { chatController } = require('./chatController');

// Em uma rota Express:
app.post('/api/chat', chatController);
