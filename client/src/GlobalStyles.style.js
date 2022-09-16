import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    color: black;
    text-decoration: none;
    list-style: none;
    font-family: 'DM Sans', sans-serif;

  }

  body {
    background-color: #D2E6F6;
  }

  section {
    color: red;
    font-size: 15px;
  }
`

export default GlobalStyles