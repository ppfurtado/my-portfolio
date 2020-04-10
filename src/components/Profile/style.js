import styled from 'styled-components'

export const Container = styled.div`
  width: 400px;
  height: 92%;
  background: white;
  position: absolute;
  left: 80px;
  top: 20px;
  border-radius: 4px;
  z-index: 1;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
`
export const Section = styled.div`
  width: 100%;
  height: 90%;
  background: #ccc;
  display: flex;
  flex-direction: column;
`

export const ContainerImage = styled.div`
  width: 100%;
  height: 50%;
  background: pink;
`
export const ContainerImageProfile = styled.div`
  width: 100px;
  height: 100px;
  background: green;
  border-radius: 50%;
  position: relative;
  margin: 0 auto;
  position: relative;
  top: -10%;
`
export const Image = styled.img`
  width: 100%;
  background-image: ${props => props.img};
  z-index: 2;
`

export const ContainerButtons = styled.div`
  width: 100%;
  height: 10%;
  background: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Buttons = styled.button`
  
`