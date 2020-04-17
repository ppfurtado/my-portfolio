import React from 'react'

import {FaCode, FaMusic} from 'react-icons/fa'

import {IoIosMegaphone, IoLogoGameControllerB} from 'react-icons/io'

import * as S from './style'

export default function About() {
  return (
    <S.Container>
      <S.Content className="about">
        <S.DivContent>
          <S.Titulo>About</S.Titulo>
          <S.ContainerAbout>
            <S.P>
              I am Ryan Adlard, web designer from USA, California. I have rich 
              experience in web site design and building and customization, also 
              I am good at wordpress. I love to talk with you about our unique.
            </S.P>
            <S.ContainerAbout>
              <S.Ul>
                <S.Li> <S.SubTitulo>AGE</S.SubTitulo>...29</S.Li>
                <S.Li> <S.SubTitulo>FREELANCE</S.SubTitulo>....Available</S.Li>
                <S.Li> <S.SubTitulo>RESIDENCE</S.SubTitulo>....Brasil</S.Li>
                <S.Li> <S.SubTitulo>ADDRESS </S.SubTitulo>....Pará, Brasil</S.Li>
              </S.Ul>
            </S.ContainerAbout>
          </S.ContainerAbout>
          <S.ContainerMyServices>
          <S.Titulo>My Services</S.Titulo>
            <S.MyServices>
              <S.ServicesItems>
                <FaCode size={25} />
                <S.SubTitulo>WEB DEVELOPMENT</S.SubTitulo>
                <S.Span>
                  Modern and mobile-ready website that will help you reach all of 
                  your marketing.
                </S.Span>
              </S.ServicesItems>

              <S.ServicesItems>
                <FaMusic size={25} />
                <S.SubTitulo>MUSIC WRITING</S.SubTitulo>
                Modern and mobile-ready website that will help you reach all of 
                your marketing.
              </S.ServicesItems>

              <S.ServicesItems>
                <IoIosMegaphone size={25} />
                <S.SubTitulo>ADVETISING</S.SubTitulo>
                Modern and mobile-ready website that will help you reach all of 
                your marketing.
              </S.ServicesItems>

              <S.ServicesItems>
                <IoLogoGameControllerB size={25} />
                <S.SubTitulo>GAME DEVELOPMENT</S.SubTitulo>
                Modern and mobile-ready website that will help you reach all of 
                your marketing.
              </S.ServicesItems>
            </S.MyServices>
          </S.ContainerMyServices>
        </S.DivContent>
      </S.Content>
    </S.Container>
  )
}
