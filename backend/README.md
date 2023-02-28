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

Exemplo: *http://localhost:3000/ads/ads87dsaf87sdf8as7df8s7a87*

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



