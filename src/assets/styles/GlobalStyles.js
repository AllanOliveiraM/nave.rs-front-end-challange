import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root {
    font-size: 50%;
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
  
  body {
    background: var(--color-background);
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

  .container {
    width: 90vw;
    max-width: 700px;
  }
  
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
`

export default GlobalStyles
