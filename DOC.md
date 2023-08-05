<h1>Documentação</h1>

<br/>
<br/>

## Users

<h3>Criação de usuário</h3>

#### POST - /users

+ Request

  + Body

            {
                "name": "example",
	            "email": "example@mail.com",
	            "password": "example",
	            "phone_number": "(88)123456789"
            }

+ Response - status 201

    + Body

            {
              "id": "4ba93dd5-6d42-4e7c-9e89-a79f1d3a4f16",
              "name": "example",
              "email": "example@mail.com",
	          "phone_number": "(88)123456789"
		      "created_at": "2023-07-27T13:25:23.714Z"
            }



<br/>

<h3>Listagem de usuários</h3>

#### GET - /users

<h4>Token de autenticação necessário</h4>

+ Headers

            Authorization: Bearer [access_token]


+ Response - status 200

    + Body

            [
              {
                "id": "4ba93dd5-6d42-4e7c-9e89-a79f1d3a4f16",
                "name": "example",
                "email": "example@mail.com",
	            "phone_number": "(88)123456789"
		        "created_at": "2023-07-27T13:25:23.714Z"
              }
            ]



<br/>

<h3>Atualização de usuários</h3>

#### PATCH - /users/userID

<h4>Token de autenticação necessário</h4>

+ Headers

            Authorization: Bearer [access_token]


+ Request

  + Body

            {
                "name": "updated_example"
            }

+ Response - status 200

    + Body

            {
              "id": "4ba93dd5-6d42-4e7c-9e89-a79f1d3a4f16",
              "name": "updated_example"
              "email": "example@mail.com",
	          "phone_number": "(88)123456789"
		      "created_at": "2023-07-27T13:25:23.714Z"
            }

<br/>

<h3>Deleção de usuários</h3>

#### DELETE - /users/userID

<h4>Token de autenticação necessário</h4>

+ Headers

            Authorization: Bearer [access_token]

+ Response - status 204



<br/>

## Login

<h3>Login de usuários</h3>

#### POST - /login

+ Request

  + Body

            {
	            "email": "example@mail.com",
	            "password": "example",
            }

+ Response - status 200

    + Body

            {
              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkFseXNzb24iLCJpYXQiOjE2OTExNzQ4MzMsImV4cCI6MTY5MTE3ODQzMywic3ViIjoiNGJhOTNkZDUtNmQ0Mi00ZTdjLTllODktYTc5ZjFkM2E0ZjE2In0.ueBM9u3PnxDZvinJD_HOJvmouh7iIjjmjn0WTtaiPhI"
            }






<br/>

## Contacts

<h3>Criação de contatos</h3>

#### POST - /contacts

<h4>Token de autenticação necessário</h4>

+ Headers

            Authorization: Bearer [access_token]

+ Request

  + Body

            {
                "name": "example",
	            "email": "example@mail.com",
	            "password": "example",
	            "phone_number": "(88)123456789"
            }

+ Response - status 201

    + Body

            {
              "id": "4ba93dd5-6d42-4e7c-9e89-a79f1d3a4f16",
              "name": "example",
              "email": "example@mail.com",
	          "phone_number": "(88)123456789"
		      "created_at": "2023-07-27T13:25:23.714Z"
            }


<br/>

<h3>Listagem de contatos</h3>

#### GET - /contacts

<h4>Token de autenticação necessário</h4>

+ Headers

            Authorization: Bearer [access_token]


+ Response - status 200

    + Body

            [
              {
                "id": "4ba93dd5-6d42-4e7c-9e89-a79f1d3a4f16",
                "name": "example",
                "email": "example@mail.com",
	            "phone_number": "(88)123456789"
		        "created_at": "2023-07-27T13:25:23.714Z"
              }
            ]




<br/>

<h3>Atualização de contatos</h3>

#### PATCH - /contacts/contactID

<h4>Token de autenticação necessário</h4>

+ Headers

            Authorization: Bearer [access_token]


+ Request

  + Body

            {
                "name": "updated_example"
            }

+ Response - status 200

    + Body

            {
              "id": "4ba93dd5-6d42-4e7c-9e89-a79f1d3a4f16",
              "name": "updated_example"
              "email": "example@mail.com",
	          "phone_number": "(88)123456789"
		      "created_at": "2023-07-27T13:25:23.714Z"
            }



  <br/>

<h3>Deleção de contatos</h3>

#### DELETE - /contacts/contactID

<h4>Token de autenticação necessário</h4>

+ Headers

            Authorization: Bearer [access_token]

+ Response - status 204
