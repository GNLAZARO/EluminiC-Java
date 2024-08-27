# Projeto Elumini

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 18.2.1.

## Descrição do Projeto

Esta aplicação Angular calcula o valor final de um Certificado de Depósito Bancário (CDB) com base em um valor inicial, a taxa CDI e a taxa bancária. Também calcula o imposto a ser pago dependendo do tempo de aplicação. 

## Funcionalidades

- **Cálculo do CDB**: Utiliza a fórmula `VF = VI x [1 + (CDI x TB)]` para calcular o valor final do CDB.
  - `VF` é o valor final.
  - `VI` é o valor inicial.
  - `CDI` é a taxa CDI do último mês.
  - `TB` é a taxa do banco sobre o CDI.

- **Cálculo do Imposto**: Aplica a tabela de impostos de acordo com o período da aplicação:
  - Até 06 meses: 22,5%
  - Até 12 meses: 20%
  - Até 24 meses: 17,5%
  - Acima de 24 meses: 15%

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar o servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos fonte.


## Compilação

Execute `ng build` para compilar o projeto. Os artefatos de compilação serão armazenados no diretório `dist/`.

