# Motors Shop API Documentation

## Instalação

```Bash
$ cd backend
$ npm i
```

## Execução

```Bash
$ npm run start:dev
```

# Rotas

## Rotas de Usuário

***URL: http://localhost:3000/users***

### Criação de Usuário - POST

**Todos os campos de envio são obrigatórios:**

+ name;
+ email;
+ cpf;
+ password;
+ cellphone;
+ description;
+ birthdate;
+ type;
+ zipcode;
+ state;
+ city;
+ street;
+ number;
+ complement;

#### Retorno Esperado:

```json
{
	"name": "André soares",
	"email": "andre@email.com",
	"cpf": "00000000000000",
	"cellphone": "(00) 90000-0000",
	"birthdate": "2001-02-02",
	"description": "esta é uma descrição genérica",
	"type": "Anunciante",
	"zipCode": "12345123",
	"state": "São Paulo",
	"city": "São Paulo",
	"street": "Avenida brigadeiro faria lima",
	"number": 0,
	"complement": null,
	"id": "0dd5cdea-ec64-43bf-a7b3-a9382a82088c"
}
```

### Listagem todos os usuários - GET

**Sem campos de envio**

**Esta rota precisa de autenticação**

#### Retorno Esperado:

```json
[
	{
		"id": "61025376-8cb3-40c0-a880-69b97eac4792",
		"name": "Zé das couves",
		"email": "Zé@gmail.com",
		"cpf": "123456789",
		"cellphone": "99678481",
		"birthdate": "20/09/1994",
		"description": "eu",
		"type": "Comprador",
		"zipCode": 12345123,
		"state": "Paraiba",
		"city": "Gurinhém",
		"street": "Rua das dores",
		"number": 19,
		"complement": "Casa"
	},
	{
		"id": "dfada6da-1283-4874-b93d-99833b2c814c",
		"name": "maria",
		"email": "ma@gmail.com",
		"cpf": "123456789",
		"cellphone": "99678481",
		"birthdate": "20/09/1994",
		"description": "eu",
		"type": "Anunciante",
		"zipCode": 58356000,
		"state": "São paulo",
		"city": "Paulínia",
		"street": "Rua das marias",
		"number": 90,
		"complement": "Casa"
	},
	{
		"id": "0dd5cdea-ec64-43bf-a7b3-a9382a82088c",
		"name": "Alexandre",
		"email": "alex@email.com",
		"cpf": "00000000000000",
		"cellphone": "(00) 90000-0000",
		"birthdate": "2001-02-02",
		"description": "mocked description",
		"type": "Anunciante",
		"zipCode": 12345123,
		"state": "São Paulo",
		"city": "São Paulo",
		"street": "mocked street",
		"number": 0,
		"complement": null
	}
]
```

### Listagem de um Usuário - GET

**Sem campos de envio**

**Id do Usuário deve ser passado na URL**

Exemplo: *http://localhost:3000/users/:userId*

#### Retorno Esperado:

```json
{
	"name": "André soares",
	"email": "andre@email.com",
	"cpf": "00000000000000",
	"cellphone": "(00) 90000-0000",
	"birthdate": "2001-02-02",
	"description": "esta é uma descrição genérica",
	"type": "Anunciante",
	"zipCode": "12345123",
	"state": "São Paulo",
	"city": "São Paulo",
	"street": "Avenida brigadeiro faria lima",
	"number": 0,
	"complement": null,
	"id": "0dd5cdea-ec64-43bf-a7b3-a9382a82088c"
}
```

<br/>

### Edição de um usuário - PATCH

**Todos os campos de envio são os mesmos do POST e são opcionais**

**Id do Usuário deve ser passado na URL**

Exemplo: *http://localhost:3000/users/:userId*

#### Esta rota não tem retorno

<br/>


### Deleção de um usuário - DELETE

**Sem campos de envio**

**Id do Usuário deve ser passado na URL**

Exemplo: *http://localhost:3000/users/:userId*

#### Esta rota não tem retorno

<br/>

## Rotas de Login

***URL: http://localhost:3000/login***

### Fazer Login - POST

**Todos os campos de envio são obrigatórios:**

+ Email;
+ Password;

#### Retorno Esperado:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwZGQ1Y2RlYS1lYzY0LTQzYmYtYTdiMy1hOTM4MmE4MjA4OGMiLCJlbWFpbCI6ImFsZXhAZW1haWwuY29tIiwibmFtZSI6IkFsZXhhbmRyZSIsImlhdCI6MTY3ODM2NDQ0NywiZXhwIjoxNjc4NDUwODQ3fQ.JLKUcnQjDW4NN6GqP9OTAHNcolZ8mjiF08OINrFDJTk"
}
```

### Listagem do usuário logado - GET

**Sem campos de envio**

**O usuário deve estar logado para ver suas credenciais**

Exemplo: *http://localhost:3000/me*

#### Retorno Esperado:

```json
{
  "id": "0dd5cdea-ec64-43bf-a7b3-a9382a82088c",
  "email": "alex@email.com",
  "name": "Alexandre"
}
```

<br/>

## Rotas de Anúncio

***URL: http://localhost:3000/ads***

### Criação de Anúncio - POST

**Todos os campos de envio são obrigatórios:**

+ Year;
+ Price;
+ Name;
+ Type;
+ Km;
+ Description;

#### Retorno Esperado:

```json
{
  "id": "ads87dsaf87sdf8as7df8s7a87",
  "year": 2011,
  "price": 17000.00,
  "name": "Fiat Uno Cross X",
  "type": "Motos",
  "km": 2000,
  "description": "FIAT UNO 1.0 WAY 8...",
  "isActivate": true,
  "createAt": "Dom Fev 01 2022 17:30:50 GMT+0000 (GMT)",
  "updatedAt": "Dom Fev 01 2022 17:30:50 GMT+0000 (GMT)"
}
```

<br/>


### Listagem todos Anúncios - GET

**Sem campos de envio**


#### Retorno Esperado:

```json
[
{
  "id": "ads87dsaf87sdf8as7df8s7a87",
  "year": 2011,
  "price": 17000.00,
  "name": "Fiat Uno Cross X",
  "type": "Motos",
  "km": 2000,
  "description": "FIAT UNO 1.0 WAY 8...",
  "isActivate": true,
  "createAt": "Dom Fev 01 2022 17:30:50 GMT+0000 (GMT)",
  "updatedAt": "Dom Fev 01 2022 17:30:50 GMT+0000 (GMT)"
},
{
  "id": "xcz87dsaf87ehj38as7df87a87",
  "year": 2015,
  "price": 27300.00,
  "name": "Jeep Renegade",
  "type": "Carros",
  "km": 40000,
  "description": "JEEP RENEGADE V8 RAILROAD...",
  "isActivate": true,
  "createAt": "Dom Fev 05 2022 11:45:50 GMT+0000 (GMT)",
  "updatedAt": "Dom Fev 05 2022 11:45:50 GMT+0000 (GMT)"
},
{
  "id": "pskdlfdf87sdf8as7df8s7a87",
  "year": 2020,
  "price": 47563.00,
  "name": "Susuki Hayabusa Road Roller",
  "type": "Carros",
  "km": 10000,
  "description": "Susuki Hayabusa ShoninLaden V9 3000...",
  "isActivate": true,
  "createAt": "Dom Jan 21 2022 07:30:10 GMT+0000 (GMT)",
  "updatedAt": "Dom Jan 21 2022 07:30:10 GMT+0000 (GMT)"
}
]
```

### Listagem de um Anúncio - GET

**Sem campos de envio**

**Id do Anúncio deve ser passado na URL**

Exemplo: *http://localhost:3000/ads/:adId*

#### Retorno Esperado:

```json
{
  "id": "ads87dsaf87sdf8as7df8s7a87",
  "year": 2011,
  "price": 17000.00,
  "name": "Fiat Uno Cross X",
  "type": "Motos",
  "km": 2000,
  "description": "FIAT UNO 1.0 WAY 8...",
  "isActivate": true,
  "createAt": "Dom Fev 01 2022 17:30:50 GMT+0000 (GMT)",
  "updatedAt": "Dom Fev 01 2022 17:30:50 GMT+0000 (GMT)"
}
```

<br/> 


## Rotas de Comentário

**Id do Anúncio deve ser passado na URL**

***URL: http://localhost:3000/comments/:adId***

### Criação de comentário - POST

**Todos os campos de envio são obrigatórios:**

+ Content;

**Esta rota precisa de autenticação**

#### Retorno Esperado:

```json
{
	"content": "Muito bom, comprei este carro e não me arrependo! Vendedor de alta qualidade",
	"user": "0dd5cdea-ec64-43bf-a7b3-a9382a82088c",
	"ad": "eda74ffc-f4e3-45a5-9735-02810704abed",
	"id": "9c2b47ae-1e98-4ce9-a673-924bed5a090c",
	"createdAt": "2023-03-09T13:28:40.253Z",
	"updatedAt": "2023-03-09T13:28:40.253Z"
}
```

### Listagem todos os comentários de um anúncio - GET

**Sem campos de envio**

**Esta rota precisa de autenticação**

#### Retorno Esperado:

```json
[
	{
		"id": "fef06c76-525a-4e20-ab2a-6d451c1eb244",
		"createdAt": "2023-03-09T13:28:19.480Z",
		"updatedAt": "2023-03-09T13:28:19.480Z",
		"content": "Muito bom, comprei este carro e não me arrependo! Vendedor de alta qualidade",
		"user": {
			"id": "0dd5cdea-ec64-43bf-a7b3-a9382a82088c",
			"name": "Alexandre Borges",
			"email": "alex@email.com",
		},
		"ad": {
			"id": "d54f4188-b476-478f-a4a8-b0742ab975d7",
			"isActive": true,
			"createdAt": "2023-03-09T13:19:56.545Z",
			"updatedAt": "2023-03-09T13:19:56.545Z",
			"seller": {
				"id": "fd4b8b43-653b-4f49-a7eb-cd547aed176b",
				"name": "Sarah Luiza",
				"email": "saralu@gmail.com",
			}
		}
	}
]
```

### Listagem de um Comentário - GET

**Sem campos de envio**

**Id do Comentário deve ser passado na URL**

Exemplo: *http://localhost:3000/comments/:commentId*

#### Retorno Esperado:

```json
{
	"id": "fef06c76-525a-4e20-ab2a-6d451c1eb244",
	"createdAt": "2023-03-09T13:28:19.480Z",
	"updatedAt": "2023-03-09T13:28:19.480Z",
	"content": "Muito bom, comprei este carro e não me arrependo! Vendedor de alta qualidade",
	"user": {
		"id": "0dd5cdea-ec64-43bf-a7b3-a9382a82088c",
		"name": "Alexandre Borges",
		"email": "alex@email.com",
	},
	"ad": {
		"id": "d54f4188-b476-478f-a4a8-b0742ab975d7",
		"isActive": true,
		"createdAt": "2023-03-09T13:19:56.545Z",
		"updatedAt": "2023-03-09T13:19:56.545Z",
		"seller": {
			"id": "fd4b8b43-653b-4f49-a7eb-cd547aed176b",
			"name": "Sarah Luiza",
			"email": "saralu@gmail.com",
		}
	}
}
```

<br/>

### Edição de um Comentário - PATCH

**Todos os campos de envio são os mesmos do POST e são opcionais**

**Id do Comentário deve ser passado na URL**

Exemplo: *http://localhost:3000/comments/:commentId*

#### Esta rota não tem retorno

<br/>


### Deleção de um Comentário - DELETE

**Sem campos de envio**

**Id do Comentário deve ser passado na URL**

Exemplo: *http://localhost:3000/comments/:commentId*

#### Esta rota não tem retorno




