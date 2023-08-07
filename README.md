Para iniciar a a API dockerize o projeto com $ docker compose up;
Rode as migrations com $ knex migrate:up para criar as tableas no banco de dados;
Use o comando $ npm start;

A API possui 2 rotas, uma rota 'http://localhost:/3000' onde é renderizado o frontend do formulário de cadastro de funcionários,
e a rota 'http://localhost:/3000/funcionarios' que é acessada pelo formulário, essa por sua vez é responsável por cadastrar os dados.
