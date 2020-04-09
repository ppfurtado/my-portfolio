import React from 'react'

import {IoMdPerson, IoMdText} from 'react-icons/io'
import {TiDocumentText} from 'react-icons/ti'
import {MdWork, MdEmail} from 'react-icons/md'

import * as S from './style'

export default function Aside(){
  return(
    <S.Container>
      <S.Ul>

        <S.Li>
          <S.A href="/#">
            <S.Span><IoMdPerson /></S.Span>
            <S.Span>About</S.Span>
          </S.A>
        </S.Li>

        <S.Li>
          <S.A href="/#">
            <S.Span><TiDocumentText /></S.Span>
             <S.Span>About</S.Span>
          </S.A>
        </S.Li>

        <S.Li>
          <S.A href="/#">
          <S.Span><MdWork /></S.Span>
             <S.Span>About</S.Span>
          </S.A>

        </S.Li>

        <S.Li>
          <S.A href="/#">
            <S.Span><IoMdText /></S.Span>
            <S.Span>About</S.Span>
          </S.A>

        </S.Li>
        <S.Li>
          <S.A href="/#">
            <S.Span><MdEmail /></S.Span>
             <S.Span>About</S.Span>
          </S.A>
        </S.Li>

      </S.Ul>
    </S.Container>
  )
}