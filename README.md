## 🚗 EasyCar - Backend (API)

### 🚀 Visão Geral

O EasyCar Backend é a API responsável por gerenciar a conexão entre passageiros e motoristas, utilizando geolocalização em tempo real para facilitar corridas e melhorar a experiência de transporte. Ele fornece endpoints para:

🎯 Geolocalização em Tempo Real – Rastreamento de motoristas e passageiros em tempo real.
<br>
🔗 Gerenciamento de Corridas – Criação, atualização e finalização de corridas.
<br>
🔒 Autenticação Segura – Gerencia a autenticação de usuários com JWT (JSON Web Tokens).
<br>
📊 Histórico de Corridas – Armazena e retorna o histórico de corridas dos usuários.

## ✨ Características do Projeto

✅ Banco de Dados SQLite – Utiliza SQLite para armazenamento de dados local.
<br>
✅ Geolocalização em Tempo Real – Integração com serviços de geolocalização para rastreamento de motoristas e passageiros.
<br>
✅ Autenticação com JWT – Segurança robusta com tokens JWT.
<br>
✅ CORS Habilitado – Permite integração segura com o frontend mobile.
<br>
✅ API RESTful – Endpoints bem definidos para integração com o aplicativo mobile.

## 🛠️ Tecnologias Utilizadas

### Backend

- **Express** – Framework web rápido e eficiente para Node.js.

- **SQLite** – Banco de dados leve e embutido para armazenamento local.

- **CORS** – Middleware para permitir requisições de diferentes origens.

- **JWT** – Autenticação segura com JSON Web Tokens.

### 🛠️ Ferramentas de Desenvolvimento

- **Node.js** – Ambiente de execução JavaScript.

- **ES Modules** – Utilização de módulos ES para organização do código.

- **Nodemon** – Reinicialização automática do servidor durante o desenvolvimento.

## Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn (gerenciadores de pacotes)

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/JPerrut/easycar-backend.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd easycar-backend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Rotas da API

### Rides

- Listar Corridas
  ```bash
  GET http://localhost:3001/rides
  ```
- Listar Motoristas
  ```bash
  GET http://localhost:3001/rides/drivers/2
  ```
- Listar Detalhes da corrida
  ```bash
  GET http://localhost:3001/rides/1
  ```
- Aceitar corrida
  ```bash
  PUT http://localhost:3001/rides/4/accept
  ```
  body - raw:
  ```bash
  {
      "driver_user_id": 4
  }
  ```
- Cancelar corrida
  ```bash
  PUT http://localhost:3001/rides/4/cancel
  ```
  body - raw:
  ```bash
  {
      "driver_user_id": 4
  }
  ```
- Inserir corrida
  ```bash
  POST http://localhost:3001/rides
  ```
  body - raw:
  ```bash
  {
      "passenger_user_id": "1",
      "pickup_address": "Rua de origem",
      "pickup_latitude": "-23.543132",
      "pickup_longitude": "-46.665389",
      "dropoff_address": "Rua de destino"
  }
  ```
- Deletar corrida
  ```bash
  DELETE http://localhost:3001/rides/5
  ```
  body - raw:
  ```bash
  {
      "passenger_user_id": "1",
      "pickup_address": "Rua de origem",
      "pickup_latitude": "-23.543132",
      "pickup_longitude": "-46.665389",
      "dropoff_address": "Rua de destino"
  }
  ```
- Finalizar corrida
  ```bash
  POST http://localhost:3001/rides/5
  ```
  body - raw:
  ```bash
  {
      "passenger_user_id":  1
  }
  ```

## 🤝 Contribuição

### Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## 📄 Licença

Este projeto está licenciado sob a <a href="https://opensource.org/license/mit">MIT License</a>.

## 📞 Contato

### Se tiver dúvidas ou sugestões, entre em contato:

Nome: João Perrut <br>
Email: joaoperrutc@gmail.com <br>
Linkedin: https://www.linkedin.com/in/perrut/
