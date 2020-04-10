import React from 'react';

import ImgProfile from '../../assets/Pedro_profile_2.png'

import * as S from './style'

export default function Profile() {
  return (
    <S.Container>

      <S.Section>
        <S.ContainerImage>
        </S.ContainerImage>

        <S.ContainerImageProfile >
          <img src={ImgProfile} alt="profile" style={{width: "100%", borderRadius:"50%"}} />
        </S.ContainerImageProfile >
      </S.Section>

      <S.ContainerButtons>
        <S.Buttons>DOWNLOAD CV</S.Buttons>
        <S.Buttons>CONTACT ME</S.Buttons>
      </S.ContainerButtons>

    </S.Container>
  );
}
