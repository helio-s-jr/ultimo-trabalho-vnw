import React from 'react'
import * as S from './style'
import Header from '../../Components/Header/index'
import Footer from '../../Components/Footer/index'
import ImageConstruction from '../../Assets/Page-Construction/repair.png'

export default function Projetos(){
    return(
        <S.ContainerProjects>
            <Header/>
            <S.ContainerMainProjects>
                <S.H1>Em construção</S.H1>
                <S.FigureConstruction>
                    <img src={ImageConstruction} alt="Ilustração de página em construção" />
                </S.FigureConstruction>
            </S.ContainerMainProjects>
            <Footer/>
        </S.ContainerProjects>
    );
}