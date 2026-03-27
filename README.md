# Desafio Tecnico Backend - NestJS (Starter)

Este repositorio e um ponto de partida para entrevista tecnica backend.

## Objetivo

Implementar o endpoint abaixo para sugerir cidades da Bahia:

`GET /v1/cities/:search?limit=10`

Resposta esperada:

```json
[
  "Salvador",
  "Santo Antonio de Jesus",
  "Simoes Filho"
]
```

## Regras de Negocio

- Filtrar cidades cujo nome contenha o texto pesquisado.
- Ignorar maiusculas/minusculas.
- Ignorar acentos (`Sao` ~= `sao`).
- Respeitar limite de resultados:
  - default: 10
  - maximo recomendado: 50
- Retornar em ordem alfabetica.
- Tratar entradas invalidas (ex.: busca vazia).

## O que esta pronto

- Estrutura do projeto NestJS.
- Modulo, controller e DTO de entrada.
- Lista base de cidades em `src/cities/cities.constant.ts`.
- `CitiesService` com metodo em modo TODO para implementacao do candidato.

## Onde implementar

- `src/cities/cities.service.ts`

## Avaliacao

- Qualidade e legibilidade do codigo
- Organizacao e separacao de responsabilidades
- Performance (evitar retrabalho por requisicao)
- Tratamento de erro e validacoes
- Clareza de raciocinio e trade-offs

Nao e necessario concluir 100% para uma boa avaliacao.

## Como rodar

```bash
npm install
npm run start:dev
```

Servidor em `http://localhost:3000`.

## Testes

O starter nao entrega testes de solucao por padrao.

Voce pode adicionar:

- testes unitarios de service
- testes e2e de endpoint
