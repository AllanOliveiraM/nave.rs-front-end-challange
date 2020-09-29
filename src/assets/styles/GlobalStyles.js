import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root {
    font-size: 70%;
  }

  @media (max-width: 275px) {
    :root {
      font-size: 3vw;
    }
  }

  @media (min-width: 276px) and (max-width: 340px) {
    :root {
      font-size: 47%;
    }
  }

  @media (min-width: 341px) and (max-width: 440px) {
    :root {
      font-size: 60%;
    }
  }

  @media (min-width: 660px) {
    :root {
      font-size: 62.5%;
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
    text-align: center;
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

    .zoom-in:active {
    transform: scale(0.97);
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

  .row:before, .row:after {
      content: "";
      display: table;
  }
  .row:after {
      clear: both;
  }
`

export default GlobalStyles
