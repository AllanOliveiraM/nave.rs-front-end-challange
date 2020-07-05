<p align="center">
    <img src="https://raw.githubusercontent.com/AllanOliveiraM/nave.rs-front-end-challange/master/docs_images/logo.png" width="350">
</p>

<br />

<p align="center">
    <img height="20" src="https://img.shields.io/badge/license-MIT-green">
    <img height="20" src="https://circleci.com/gh/AllanOliveiraM/nave.rs-front-end-challange.svg?style=svg">
</p>

<br />

# Ainda em Desenvolvimento!

**Navedex** é um sistema Web Front End escrito em JavaScript utilizando Node.js e a biblioteca [React](https://reactjs.org/), e foi desenvolvido como teste proposto pela empresa [Nave.rs](https://nave.rs/) - [@naveteam](https://github.com/naveteam/), descrito no seu respectivo [repositório oficial](https://github.com/naveteam/front-end-challenge). <br /> <br />

### Demo

Uma demonstração em produção com build automatizada do App se encontra hospedada pelo Netlify, disponível [aqui](https://navedex.netlify.app/)! <br />

Para fins de testes, você pode usar as credenciais utilizadas no ambiente de desenvolvimento:<br />
Email: `nallamo2016@gmail.com` Senha: `nave1234`<br />

`Fique à vontade para me enviar um e-mail caso possua alguma dúvida :)`

### Dependências

Use o comando `npm install` para preparar as dependências.
São dependências do projeto, descitas no arquivo de controle `package.json`, os seguintes pacotes `node`:

- axios: ^0.19.2
- react: ^16.13.1
- react-dom: ^16.13.1
- react-helmet: ^6.1.0
- react-image-appear: ^1.3.24
- react-modal: ^3.11.2
- react-scripts: 3.4.1
- react-top-loading-bar: ^1.2.0
- styled-components: ^5.1.1
- universal-cookie: ^4.0.3

<br />

### Scripts Disponíveis

No diretório do projeto, você pode executar:

#### `npm start`

O comando `npm start` inicia o App em um servidor de desenvolvimento.<br />
Abra [http://localhost:3000](http://localhost:3000) para visualizar no seu navegador.

#### `npm test`

Para testar o script, você pode usar o comando `npm test`. Visite a [documentação](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

#### `npm run build`

O comando `npm run build` cria uma versão de produção do website e a salva em um diretório `build` na raíz do projeto. <br />

Para mais informações visite a [documentação](https://facebook.github.io/create-react-app/docs/deployment) oficial do React.

<br />
<br />

### História de Desenvolvimento

Em todos os aspectos, este sem dúvida foi o projeto que mais me trouxe novidades em tão pouco tempo até então. Meus projetos anteriores sempre foram focados em desenvolvimento Web Back End em Python, e alguns em Desktop. Na Web, sempre usei opções mais simples e relativamente antigas para o desenvolvimento, como HTML5 puro, com a interatividade escrita em JavaScript Vanilla ou em bibliotecas como jQuery, estilização em CSS puro ou frameworks como MaterializeCSS e Bootstrap.

#### Dificuldades

Não faz quase nenhum tempo significativo que iniciei os meus estudos em React, então, este projeto foi quase um Bootcamp!
Nenhum dos pacotes/bibliotecas utilizadas neste projeto foram utilizadas por mim antes, o que demandou maiores estudos de como é a sua implementação e como são as suas características.

- React: Primeiro projeto utilizando puramente a biblioteca e seus recursos.
- Postman: Primeira vez utilizando o Postman para APIs.
- Axios: Primeira vez utilizando para `HTTP requests` ao invés de jQuery.
- Cookie: Primeira vez armazenando e autenticando `sessions` via `token` no lado do cliente.

#### Divergências

É possível encontrar algumas divergências previstas do projeto original proposto pela Nave.rs, e são:

- A URL das imagens dos Navers, neste projeto, é externa.

Via Postman, é possível verificar aparentemente a utilização de urls relativas ao própio servidor de API, mas com a sua implementação não obtive êxito.

- Layout da página é dinâmico.

Na apresentação das telas do Figma, com o link descrito no README do projeto oficial, verifica-se o alinhamento absoluto de alguns elementos. Neste projeto, foi utilizado o desenvolvimento responsivo otimizado para Mobile, portanto, as telas baseiam-se em modelos de `Grid CSS`, tornando a página 'mutável' de acordo com o dispositivo a ser utilizado.

- Algumas animações baseadas em `material design`.

Nenhuma animação ou `feature` de interatividade, ou qualquer restrição foi mencionada na prototipação, por este motivo, investi em interfaces interativas e chamativas.

<br />
<br />

### Autor

| [<img src="https://avatars2.githubusercontent.com/u/41436010?v=4" width=115><br><sub>@AllanOliveiraM</sub>](https://github.com/AllanOliveiraM) |
| :---: |
