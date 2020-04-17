import styled, { createGlobalStyle } from 'styled-components'

export const GlogalStyle = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
  }
  @font-face {
    font-family: Roboto;
    src: url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
  }
  body {
    background: linear-gradient(45deg, #50a3a2, #78cc6d);
    font-family: Roboto, sans-serif;
  }
` 

export const Container = styled.div`
  height: 100vh;
  position: relative;
  width: 82%;
  margin: 0 auto;

  @media(max-width:1070px){
    display: block;
  }
`
