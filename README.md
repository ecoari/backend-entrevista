# Desafio Técnico Backend - NestJS

Este repositório é um ponto de partida para entrevista técnica backend.

## Objetivo

Implementar o endpoint abaixo para sugerir cidades da Bahia:

`GET /v1/cities/:search?limit=10`

Resposta esperada:

```json
[
  "Salvador",
  "Santo Antônio de Jesus",
  "Simões Filho"
]
```

## Regras de Negócio

- Filtrar cidades cujo nome contenha o texto pesquisado.
- Ignorar maiúsculas/minúsculas.
- Ignorar acentos (`São` ~= `sao`).
- Respeitar limite de resultados:
  - default: 10
  - máximo recomendado: 50
- Retornar em ordem alfabética.
- Tratar entradas inválidas (ex.: busca vazia).

## O que está pronto

- Estrutura do projeto NestJS.
- Módulo, controller e DTO de entrada.
- Lista base de cidades em `src/cities/cities.constant.ts`.

## Onde implementar

- `src/cities/cities.service.ts`

## Avaliação

- Qualidade e legibilidade do código
- Organização e separação de responsabilidades
- Performance (evitar retrabalho por requisição)
- Tratamento de erro e validações
- Clareza de raciocínio e trade-offs

Não é necessário concluir 100% para uma boa avaliação.

## Como rodar

```bash
npm install
npm run start:dev
```

Servidor em `http://localhost:3000`.

## Testes

O starter não entrega testes de solução por padrão.

Você pode adicionar:

- testes unitários de service
- testes e2e de endpoint
