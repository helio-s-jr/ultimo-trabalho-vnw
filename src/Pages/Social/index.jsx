import React from 'react'
import * as S from './style'
import Header from '../../Components/Header/index'
import Footer from '../../Components/Footer/index'

export default function Social(){
    return(
        <S.ContainerSocial>
            <Header/>
            <S.ContainerMainSocial>
                <h1>Página para os Cards de Desenvolvimento Sustentáveis</h1>
            </S.ContainerMainSocial>
            <Footer/>
        </S.ContainerSocial>
    );
}