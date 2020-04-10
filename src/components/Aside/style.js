import styled from 'styled-components'

export const Container = styled.div`
  width: 70px;
  background: white;
  position: absolute;
  top: 40px;
  z-index: 100;
  border-radius: 4px;

`
export const Ul = styled.ul`
  display: grid;
  gap: 10px;
`
export const Li = styled.li`
  list-style-type: none;
  padding: 9px;
  &:not(first-child){
    border-bottom: 1px solid black;
  }
`
export const Span = styled.span`
  color: black;
`
export const A = styled.a`
  display: grid;
  justify-content:center;
  justify-items: center;
  text-decoration: none;
  
  ${Span}:hover &{
    background: #78cc6d;
  }
`