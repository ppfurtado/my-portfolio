import styled from 'styled-components'

export const Container = styled.div`
  width: 413px;
  height: 84%;
  background: white;
  position: absolute;
  /* left: 480px; */
  right: 0;
  top: 40px;
  border-radius: 0 4px 4px 0;
  display: grid;
  justify-items: right;

  /* OVERFLOW */
  overflow: scroll;
  ::-webkit-scrollbar {
    
    width: 5px;
    height: 0;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #ccc, #78cc6d);
    border-radius: 50px;
    
  }
 
  /* MÉDIA QUERY */
  @media (max-width: 1070px) {

  }
`

export const Content = styled.div`
  width: 96%;
`
export const DivContent = styled.div`
  margin: 20px 10px;
`


export const Titulo = styled.h4`

`
export const SubTitulo = styled.h6`

`

export const ContainerAbout = styled.div`
  width: 100%;
  margin: 15px 0 0 0;
`

export const P = styled.p`
  font: 12px Roboto, sans-serif;
`

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const Li = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
`
export const MyServices = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px 0;
  gap: 10px;
`
export const ContainerMyServices = styled.div`
  width: 100%;
  margin: 10px 0 0 0;
`
export const ServicesItems = styled.div`
  margin: 10px;
  display: grid;
  /* flex-direction: column; */
  gap: 5px 0;
`
export const Span = styled.span`

`