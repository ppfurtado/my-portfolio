import React from 'react'
import {MdWork} from 'react-icons/md'
import {FaGraduationCap} from 'react-icons/fa'

import * as S from '../style'
import * as R from './StyleResume'

export default function Resume() {
  return (
    <S.Container>
      <S.Content className="resume">
        <S.DivContent>
          <S.Titulo>Resume</S.Titulo>
          <R.ContainerResume>
            <R.GridResume>
              <R.FlexItem>
                <MdWork size={22}  color="#78cc6d" /><R.TitleText>Experiência</R.TitleText>
              </R.FlexItem>
              <R.TitleData>
                2019 - Presente
              </R.TitleData>
              <R.TitleText>professor voluntário</R.TitleText>
              <R.SubTitleText>Projeto social 100 por 1</R.SubTitleText>
              <R.Descriction>
                Vice coordernador do projeto, professor de Matemática e Informática.
              </R.Descriction>

            </R.GridResume>
            <R.GridResume>
              <R.FlexItem>
                <FaGraduationCap size={22} color="#78cc6d" /><R.TitleText>Formação</R.TitleText>
              </R.FlexItem>
              <R.TitleData>
                2012 - 2019
              </R.TitleData>
              <R.TitleText>universidade federal do pará</R.TitleText>
              <R.SubTitleText>belém</R.SubTitleText>
              <R.Descriction>
                Bacharelado em Engenharia da Computação 
              </R.Descriction>
            </R.GridResume>
          </R.ContainerResume>

        </S.DivContent>
      </S.Content>
    </S.Container>
  )
}
