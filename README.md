# Trybe Futebol Clube

## Resumo

Se trata de uma aplicação fullstack de controle de partidas e tabela do futebol brasileiro. Pelo frontend você pode fazer requisições para a API criada

Dentre elas: 
- Acessar todas as partidas em andamento e finalizadas (Pode ser feito tbm um filtro para elas)
- Criar novas partidas
- Finalizar partidas
- Login com verificação de email / senha
- Consultar a tabela de pontos gerais, do time mandante e do time visitante

Fiquei responsável pela criação do backend, utilizei sequelize gerando as migrations e seeders para criação do banco de dados, TypeScript como linguagem, ExpressJs para criação de rotas, além de validações com Joi, JasonWebToken e bcryptjs

O frontend foi fornecido pela [Trybe](https://www.betrybe.com/).

## Técnologias usadas

Backend:
> NodeJS, ExpressJS, MySQL, Sequelize, TypeScript, JavaScript, JWT, BcryptJS, Joi, MySQL/Postgres

## Para visualização do projeto e verificar seu funcionamneto:

Acesse: 
```bash
npm test
```

### Executando Testes

- Acesse o Backend da raiz do diretório:

```bash
cd app/backend/
```

- Para rodar os tests:

```bash
npm test
```
