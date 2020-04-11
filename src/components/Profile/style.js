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
  width: 102px;
  height: 102px;
  background: white;  
  border-radius: 50%;
  position: relative;
  float: left;
  margin: 0 auto;
  position: relative;
  top: -25%;
`
export const H1 = styled.h1`
  
`

export const H4 = styled.h4`
  color: #78cc6d;
`

export const Image = styled.img`
  width: 100px;
  background-image: ${props => props.img};
  z-index: 2;
`

export const ContainerDescription = styled(ContainerImage)`
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  text-align: center;
`

export const ContainerButtons = styled.div`
  width: 100%;
  height: 10%;
  background: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Buttons = styled.button`
  display: flex;
  justify-content: center;
`
export const ContainerIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 15px);
  gap: 30px;
  justify-items: center;
  justify-content: center;
`
export const StyleIcons = styled.a`
  text-decoration: none;
  padding: 2px;
  transition: color 0.2s;
  color: black;

  :hover {
    color: #78cc6d;
  }
`
export const Span = styled.span`
  padding: 0 5px;
`
export const Img = styled.img`
  width: 100%;
  border-radius: 4px 4px 0 0;
`