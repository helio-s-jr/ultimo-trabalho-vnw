import React from 'react'
import * as S from './style'


export default function BioCardDrive(Close){

    return(
        <S.ContainerCardDriver>
            <S.ButtonDriver onClink={Close}>X</S.ButtonDriver>
            <S.ContainerMainDriver>
                <S.H1Driver>Administrativo</S.H1Driver>
                <S.BoxHistoryDriver>
                    <S.ParagrafsDriver>Minha trejetória na área administrativa</S.ParagrafsDriver>
                    <S.ParagrafsDriver>Minha trejetória na área administrativa</S.ParagrafsDriver>
                    <S.ParagrafsDriver>Minha trejetória na área administrativa</S.ParagrafsDriver>
                    <S.ParagrafsDriver>Minha trejetória na área administrativa</S.ParagrafsDriver>
                </S.BoxHistoryDriver>
            </S.ContainerMainDriver>
        </S.ContainerCardDriver>
    );
}