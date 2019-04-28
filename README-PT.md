# Desafio Getninjas Frontend Developer

## Sobre

Este projeto foi implementado de acordo com o descrito no arquivo [CHALLENGE](./CHALLENGE.md).

### Pré requisitos

- Se quiser utilizar com o NodeJS:
  - [NodeJS](https://nodejs.org)

- Se quiser utilizar com o Docker:

  - [Docker](https://docs.docker.com/install/)
  - [Docker Compose](https://docs.docker.com/compose/install/)

### RECURSOS

- [Web API](http://localhost:3000/api)
- [Web APP](http://localhost:8081)

### Como utilizar

- NodeJS
  - Executar os comandos para instalar as depedencias:
  
  ```bash
  cd api
  npm i
  cd ../webapp
  npm i
  ```
  
  - Iniciar a API
  
  ```bash
  cd webapp
  npm start
  ```

  - Abrir a aplicação em modo de desenvolvimento

  ```bash
  cd webapp
  npm run dev
  ```

  - Compilando para produção

  ```bash
  cd webapp
  npm run build
  ```

  - Executar processo de lint da aplicação

  ```bash
  cd webapp
  npm run lint
  ```

  - Como executar os testes

  ```bash
  cd webpapp
  npm run test # testes de unidade
  npm run test:tdd # testes de unidade no modo automático
  npm run test:coverage # relatório de cobertura de testes
  npm run test:e2e # executar o teste fim a fim
  ```

- Docker
  - Compilação:

  ```bash
  docker-compose up -d --build
  ```

  - Iniciar:

  ```bash
  docker-compose up -d
  ```

  - Parar:

  ```bash
  docker-compose down