# Psel Raccoon Infosec

## Tecnologias e bibliotecas utilizadas
O projeto foi desenvolvido em Node.js. Além do functions framework, foi utilizada a biblioteca dotenv para o controle de variáveis de ambiente e a biblioteca helmet, que provê um middleware responsável por definir alguns headers nas respostas, tornando a função mais protegida contra certos tipos de ataques.

## Funcionamento
Como o Functions Framework em Node.js utiliza o Express.js, a função é definida como um Router do Express para que possam ser encadeados middlewares. Nos middlewares, são definidas ações comuns a todas as actions passadas, e, então, para cada action foi especificado um Controller, que é a última função chamada durante o processamento de cada requisição, responsável por realizar os processamentos de dados necessários e enviar a resposta ao usuário.

## Variáveis de Ambiente
Para a configuração de dados sensíveis, são utilizadas variáveis de ambiente, definidas em um arquivo .env.
Nesse caso, é especificado um arquivo .env.example, com os exemplos dos campos a serem incluídos no .env em produção.