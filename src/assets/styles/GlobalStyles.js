import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root {
    font-size: 60%;
  }
  
  @media (max-width: 310px) {
    :root {
      font-size: 40%;
    }
  }

  * {
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }
  
  html,
  body,
  #root {
    height: 100vh;
    scroll-behavior: smooth;
  }

  body,
  input,
  button,
  textarea {
    font-family: 'Montserrat', sans-serif;
    font: 500 1.4rem Montserrat;
  }
  
  button,
  a {
    cursor: pointer;
  }
  
  button:disabled {
    cursor: not-allowed;
  }
  
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 4rem;
    line-height: 4.8rem;
  }
  
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

  * {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
  }

  .zoom-in {
    transform: scale(1.0);
    transition: transform 300ms;
  }

  .zoom-in:hover {
      transform: scale(1.03);
  }

  .in-animation {
    opacity: 0;
    animation: inAnimation 0.5s forwards 0s ease;
  }

  @keyframes inAnimation{
    0%{
        opacity: 0;
        }
    100%{
        opacity: 1;
        }
  }

  .container {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding: 0 20px;

  }

  .container-h {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
  }

  @media (min-width: 1570px){
      .container {
          max-width: 1570px;
          padding: 0;
      }
      .container-h {
          max-width: 1570px;
          padding: 0;
      }
      
  }

  .row {
      margin-left: -5px;
      margin-right: -5px;
  }
  .row:before, .row:after {
      content: "";
      display: table;
  }
  .row:after {
      clear: both;
  }

  .col {
      display: inline-block;
      vertical-align: top;
      text-align: center;
      min-height: 1px;
      padding-left: 5px;
      padding-right: 5px;
      width: 100%;
      -webkit-zoom: 1;
      -moz-zoom: 1;
      -ms-zoom: 1;
      -o-zoom: 1;
      zoom: 1;
      -display: inline;
  }

  @media (min-width: 660px) {
      .col-2 {
          width: 50%;
      }
  }

  @media (min-width: 980px) {
      .col-3 {
          width: 33.3333%
      }
  }

  @media (min-width: 1220px) {
      .col-4 {
          width: 25%;
      }
  }
`

export default GlobalStyles
