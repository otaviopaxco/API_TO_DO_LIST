Este projeto consiste em uma API RESTful simples desenvolvida em Node.js para o gerenciamento de tarefas (To-Do List), permitindo a criação, listagem, atualização e exclusão de registros.

A aplicação foi construída para demonstrar a manipulação de requisições HTTP e o gerenciamento de estado em memória, seguindo os princípios de arquitetura em camadas.
Tecnologias Utilizadas:

    Node.js: Ambiente de execução Javascript server-side.
    Módulos Nativos: http para criação do servidor e url para tratamento de rotas.
    JSON: Formato de intercâmbio de dados.

Instalação:

    Certifique-se de ter o Node.js instalado em sua máquina.
    Clone o repositório ou baixe os arquivos do projeto.
    Abra o terminal na pasta raiz do projeto.
    Como este projeto utiliza apenas módulos nativos do Node.js, não há dependências externas de terceiros.

Execução:

    Para iniciar o servidor, execute o comando node app.js

O servidor será iniciado e estará ouvindo por requisições na porta 3000.

Explicação da Solução:

    Roteador (routes/tasks.js): Responsável por interceptar as requisições, identificar o método HTTP (GET, POST, PUT, DELETE) e extrair parâmetros da URL (como o ID da tarefa) para direcionar a execução ao controller correto.
    Controller (controllers/taskController.js): Atua como intermediário. Ele processa a entrada de dados (como o corpo da requisição JSON), valida as informações básicas e prepara a resposta HTTP para o cliente.
    Service (services/taskService.js): Contém a lógica de negócio. É onde as tarefas são armazenadas em uma lista em memória e onde ocorrem as operações de busca, filtragem e alteração de estado (incluindo o status completed).
    Model (models/taskModel.js): Define a estrutura de dados de uma tarefa, garantindo consistência na criação de novos objetos.

Como testar as rotas:

    POST /tasks: Cria uma tarefa. Envie {"title": "Texto"} no corpo da requisição.
    GET /tasks: Retorna a lista completa de tarefas.
    PUT /tasks/:id: Atualiza uma tarefa existente. Envie {"title": "Novo texto", "completed": true}.
    DELETE /tasks/:id: Remove uma tarefa pelo ID.
