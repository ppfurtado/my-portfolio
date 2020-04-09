import React from 'react';

import Aside from './components/Aside/Aside'
import Profile from './components/Profile/Profile'
import Content from './components/Content/Content'

import * as S from './styles/styles'


function App() {
  return (
    <S.Container className="App">
      <S.GlogalStyle /> 
      <Aside />
      <Profile />
      <Content /> 
    </S.Container>
);
}

export default App;

