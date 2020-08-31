<p align="center">
    <img src="https://raw.githubusercontent.com/AllanOliveiraM/nave.rs-front-end-challange/master/docs_images/logo.png" width="350">
</p>

<br />

<p align="center">
    <img height="20" src="https://img.shields.io/badge/license-MIT-green">
    <img height="20" src="https://circleci.com/gh/AllanOliveiraM/nave.rs-front-end-challange.svg?style=svg">
</p>

<br />


**Navedex** é um sistema Web Front End escrito em JavaScript utilizando Node.js e a biblioteca [React](https://reactjs.org/), e foi desenvolvido como teste proposto pela empresa [Nave.rs](https://nave.rs/) - [@naveteam](https://github.com/naveteam/), descrito no seu respectivo [repositório oficial](https://github.com/naveteam/front-end-challenge). <br /> <br />

### Demo

Uma demonstração em produção com build automatizada do App se encontra hospedada pelo Netlify, disponível [aqui](https://navedex.netlify.app/)! <br />

Para fins de testes, você pode usar as credenciais utilizadas no ambiente de desenvolvimento:<br />
Email: `nallamo2016@gmail.com` Senha: `nave1234`<br />

`Fique à vontade para me enviar um e-mail caso possua alguma dúvida :)`

### Dependências

Use o comando `yarn` para preparar as dependências.

<br />

### Scripts Disponíveis

No diretório do projeto, você pode executar:

#### `yarn start`

O comando `npm start` inicia o App em um servidor de desenvolvimento.<br />
Abra [http://localhost:3000](http://localhost:3000) para visualizar no seu navegador.

#### `yarn test`

Para testar o script, você pode usar o comando `npm test`. Visite a [documentação](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

#### `yarn run build`

O comando `npm run build` cria uma versão de produção do website e a salva em um diretório `build` na raíz do projeto. <br />

Para mais informações visite a [documentação](https://facebook.github.io/create-react-app/docs/deployment) oficial do React.

<br />

### Features!

- Pacote de linguagens utilizado no App para facilitar internacionalização dos textos.

No diretório `src/` você encontra o diretório `languages`, que contém o pacote de idioma que está sendo utilizado no momento. Este pacote se assemelha com um objeto JSON, e sua configuração do Main App é super fácil, possibilitando assim, possíveis traduções do App simplificadas, ou a substituição de algum texto de forma simples.

- Lazy Loading após carregamento inicial.

Após o carregamento dos cards, os componentes de Loading das imagem são automaticamente subtiuídos por simples `sections`, e as animações iniciais são reduzidas. Atualizações de alterações só ocorrem se posteriormente solicitadas. Isso ajuda no processamento posterior dos dados, aprimorando a performance.

- Mobile First!

App responsivo para ser utilizado em qualquer dispositivo.

<br />

### História de Desenvolvimento

Em todos os aspectos, este sem dúvida foi o projeto que mais me trouxe novidades em tão pouco tempo até então. Meus projetos anteriores sempre foram focados em desenvolvimento Web Back End em Python, e alguns em Desktop. Na Web, sempre usei opções mais simples e relativamente antigas para o desenvolvimento, como HTML5 puro, com a interatividade escrita em JavaScript Vanilla ou em bibliotecas como jQuery, estilização em CSS puro ou frameworks como MaterializeCSS e Bootstrap.

#### Dificuldades

Não faz quase nenhum tempo significativo que iniciei os meus estudos em React, então, este projeto foi quase um Bootcamp!
Nenhum outro dos pacotes/bibliotecas neste projeto foram utilizadas por mim antes, o que demandou maiores estudos de como é a sua implementação e como são as suas características.

- JavaScript: Iniciei os meus estudos de uma forma mais complexa da linguagem recentemente. Minha linguagem de domínio ainda é Python.
- React: Primeiro projeto utilizando puramente a biblioteca e seus recursos.
- Postman: Primeira vez utilizando o Postman para APIs.
- Axios: Primeira vez utilizando para `HTTP requests` ao invés de jQuery.
- Cookie: Primeira vez armazenando e validando `sessions` via `token` no lado do cliente apenas.

#### Divergências

É possível encontrar algumas divergências previstas do projeto original proposto pela Nave.rs, e são:

- A URL das imagens dos Navers, neste projeto, é externa.

Via Postman, é possível verificar aparentemente a utilização de urls relativas ao própio servidor de API, mas com a sua implementação não obtive êxito.

- Layout da página é dinâmico.

Na apresentação das telas do Figma, com o link descrito no README do projeto oficial, verifica-se o alinhamento absoluto de alguns elementos. Neste projeto, foi utilizado o desenvolvimento responsivo otimizado para Mobile, portanto, as telas baseiam-se em modelos de `Grid CSS`, tornando a página 'mutável' de acordo com o dispositivo a ser utilizado.

- Algumas animações baseadas em `material design`.

Nenhuma animação ou `feature` de interatividade, ou qualquer restrição foi mencionada na prototipação, por este motivo, investi em interfaces interativas e chamativas.

- Idade? Talvez seja um problema...

Aparentemente, na prototipação, estava descrito que o usuário, ao adicionar um naver, devesse preencher o input com a sua idade. Porém, armazenar idades não é nada prático de se lidar e atualizar do lado do backend ao longo do tempo. Portanto, foi definido que o campo passa a ser a data de nascimento, possibilitando se necessário, o cálculo da idade posteriormente.

<br />
<br />

### Autor

| [<img src="https://avatars2.githubusercontent.com/u/41436010?v=4" width=115><br><sub>@AllanOliveiraM</sub>](https://github.com/AllanOliveiraM) |
| :---: |
