<h1>Desafio Fullstack - Backend</h1>

Esta parte do projeto foi destinada a prover uma aplicação de criação e gerenciamento de usuários.
Os usuários podem cadastrar assim como administrar contatos dentro da plataforma.
Abaixo estão as tecnologias que foram utilizadas no projeto, e um guia de instalação e conexão com o banco de dados.


## **Tecnologias usadas:**
* Node
* Express
* TypeScript
* bcryptjs
* dotenv
* jsonwebtoken
* pg
* typeorm
* zod
* ts-node
* reflect-metadata
* express-async-errors
* cors

###

Para dar início ao projeto você deve instalar as dependências. Utilize os comandos abaixo para fazer a instalação:
```
npm run install
```

<h2>Conexão com o banco de dados</h2>

Crie um banco de dados de e insira as informações dele abaixo:
<br/>

```.env
DATABASE_URL="postgres://user:password@host:port/db"
SECRET_KEY="secret_key"
```

Após a conexão ser estabelecida, rode o servidor com o seguinte comando:
```
npm run dev
```
