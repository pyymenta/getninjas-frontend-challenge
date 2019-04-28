# Getninjas FrontEnd Challenge

## About

This project has been implemented according it's been describing in [CHALLENGE](./CHALLENGE.md) file.

### Pre requisites

- Without Docker:
  - [NodeJS](https://nodejs.org)

- With Docker:

  - [Docker](https://docs.docker.com/install/)
  - [Docker Compose](https://docs.docker.com/compose/install/)

### Resources

- [Web API](http://localhost:3000/api)
- [Web APP](http://localhost:8081)

### Usage

- NodeJS
  - Install dependencies:
  
  ```bash
  cd api
  npm i
  cd ../webapp
  npm i
  ```
  
  - Init API
  
  ```bash
  cd webapp
  npm start
  ```

  - Open dev mode

  ```bash
  cd webapp
  npm run dev
  ```

  - Production mode build

  ```bash
  cd webapp
  npm run build
  ```

  - Run JS lint

  ```bash
  cd webapp
  npm run lint
  ```

  - Run tests

  ```bash
  cd webpapp
  npm run test # unit tests
  npm run test:tdd # unit tests watch mode
  npm run test:coverage # unit test coverage
  npm run test:e2e # run E2E tests
  ```

- Docker
  - Build:

  ```bash
  docker-compose up -d --build
  ```

  - Setup:

  ```bash
  docker-compose up -d
  ```

  - Stop:

  ```bash
  docker-compose down