# Projeto HTML para Recuperação de Dados do Google Sheets

Este projeto consiste em uma página HTML que recupera dados de uma planilha do Google Sheets utilizando a API do Google e Javascript.

## Pré-requisitos

- Uma conta do Google
- Acesso a planilha no Google Sheets
- Ativar a API do Google Sheets na [Console do Desenvolvedor do Google](https://console.developers.google.com/)

## Configuração

1. Faça o download dos arquivos `index.html` e `scripts.js`
2. Abra o arquivo `index.html` em seu editor de código
3. Insira o ID da planilha do Google Sheets na variável `spreadsheetId` no arquivo `scripts.js`. O ID da planilha pode ser encontrado na URL da planilha.
4. Insira a chave de API na variável `apiKey` no arquivo `scripts.js`. Para gerar uma chave de API, siga os passos descritos na documentação da [API do Google Sheets](https://developers.google.com/sheets/api/guides/authorizing)
5. Salve as alterações nos arquivos

## Utilização

1. Abra o arquivo `index.html` em seu navegador
2. Os dados da planilha serão exibidos na tabela na página

## Personalização

- Para alterar o nome da planilha, altere a variável `sheetName` no arquivo `scripts.js`
- Para limitar o número de colunas exibidas, altere o número de iterações do loop `for` no arquivo `scripts.js`. Por exemplo, para limitar a exibição a 4 colunas, altere `j < rows[i].length` para `j < 4`.

## Considerações Finais

Este projeto é apenas uma demonstração de como é possível recuperar dados do Google Sheets utilizando a API do Google e Javascript. É possível personalizar e adaptar este projeto para atender às suas necessidades específicas. Porém, é importante lembrar que a segurança e a privacidade dos dados são fundamentais, portanto, tome as medidas necessárias para proteger os dados da sua planilha do Google Sheets.
