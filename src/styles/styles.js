import styled, { createGlobalStyle} from 'styled-components'

export const GlogalStyle = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: linear-gradient(45deg, #50a3a2, #78cc6d);
  }
`

export const Container = styled.div`
  height: 100vh;
  position: relative;
  width: 82%;
  margin: 0 auto;
`
