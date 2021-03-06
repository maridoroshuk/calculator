import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: sans-serif;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {

    & > #root {
      width: 100%;
      height: 100%;
  }
  
`
