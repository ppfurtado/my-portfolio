import React from 'react';
import {FaGithubSquare, FaLinkedin, FaTwitterSquare, FaCloudDownloadAlt, FaLongArrowAltRight} from 'react-icons/fa'

import ImgProfile from '../../assets/Pedro_profile_2.png'
import Imgbackground from '../../assets/background.jpg'


import * as S from './style'

export default function Profile() {
  return (
    <S.Container>

      <S.Section>
        <S.ContainerImage>
          <img src={Imgbackground} alt="Background" style={{ width: "100%" }}/>
        </S.ContainerImage>

        <S.ContainerDescription>
          <S.ContainerImageProfile >
            <img src={ImgProfile} alt="profile" style={{width: "100%", borderRadius:"50%"}} />
          </S.ContainerImageProfile >
            <S.H1>Pedro Furtado</S.H1>
            <S.H4>Web Developer</S.H4>
            <S.ContainerIcons>

              <S.StyleIcons href="/">
                  <FaGithubSquare size={25} />

              </S.StyleIcons>

              <S.StyleIcons href="/">
                  <FaLinkedin size={25} />
              </S.StyleIcons>

              <S.StyleIcons href="/">
                  <FaTwitterSquare size={25} /> 
              </S.StyleIcons>

            </S.ContainerIcons>
        </S.ContainerDescription>
      </S.Section>

      <S.ContainerButtons>
        <S.Buttons> <S.Span>DOWNLOAD CV</S.Span> <FaCloudDownloadAlt size={15} /> </S.Buttons>
        <S.Buttons><S.Span>CONTACT ME</S.Span> <FaLongArrowAltRight size={15} /> </S.Buttons>
      </S.ContainerButtons>

    </S.Container>
  );
}
