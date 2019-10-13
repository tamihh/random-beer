import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  *, html {
    font-family: 'Montserrat', sans-serif;
  }

  html {
    position: relative;
    width: calc(100% - 0px);
    background-color: #eee;
    overflow: hidden;
  }

  body {
    overflow-x: hidden;
    background-color: #F1F1F1;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  p, li, ol, span {
    margin: 10px 0;
    font-size: 14px;
    line-height: 17px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 10px 0;
    font-weight: bold;
  }

  ul{
    margin: 20px 0;
    padding-left: 20px;
  }

  ul ul {
    margin: 0;
  }

  li, ol {
    list-style: none;
  }


`;
