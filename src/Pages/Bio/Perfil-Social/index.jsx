import React from 'react'
import * as S from './style'


export default function BioCardSocial(Close){

    return(
        <S.ContainerCardSocial>
            <S.ButtonSocial onClink={Close}>X</S.ButtonSocial>
            <S.ContainerMainSocial>
                <S.H1Social>Administrativo</S.H1Social>
                <S.BoxHistorySocial>
                    <S.ParagrafsSocial>Minha trejetória na área administrativa</S.ParagrafsSocial>
                    <S.ParagrafsSocial>Minha trejetória na área administrativa</S.ParagrafsSocial>
                    <S.ParagrafsSocial>Minha trejetória na área administrativa</S.ParagrafsSocial>
                    <S.ParagrafsSocial>Minha trejetória na área administrativa</S.ParagrafsSocial>
                </S.BoxHistorySocial>
            </S.ContainerMainSocial>
        </S.ContainerCardSocial>
    );
}