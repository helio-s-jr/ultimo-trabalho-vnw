import React from 'react'
import * as S from './style'
import Header from '../../Components/Header/index'
//import Main from '../../Components/Main/index'
import Footer from '../../Components/Footer/index'
import Perfil from '../../Assets/Perfil/perfil-principal.png'
import Html5 from '../../Assets/Skills/Html5.png'
import Css3 from '../../Assets/Skills/Css3.png'
import JavaScript from '../../Assets/Skills/JavaScript.png'
import Reactjs from '../../Assets/Skills/React.png'

export default function Home(){
    return(
        
        <S.ContainerHome>
            <Header/>
            <S.ContainerMain>
                <S.SubtitleMainTop>
                    <S.H1MainTop>Um desenvolvedor em desenvolvimento</S.H1MainTop>
                </S.SubtitleMainTop>
                <S.ContainerPerfilSkills>
                    <S.BoxPerfil>
                        <S.ImagePerfil src={Perfil} alt='Fotografia Helio Junior'/>
                    </S.BoxPerfil>
                    <S.ContainerSkills>
                        <S.BoxHtml5>
                            <S.ImageHtml5 src={Html5} alt='Ilustração icone html5' />
                        </S.BoxHtml5>
                        <S.BoxCss3>
                            <S.ImageCss3 src={Css3} alt='Ilustração icone css3' />
                        </S.BoxCss3>
                        <S.BoxJavaScript>
                            <S.ImageJavaScript src={JavaScript} alt='Ilustração icone JavaScript' />
                        </S.BoxJavaScript>
                        <S.BoxReactjs>
                            <S.ImageReactjs src={Reactjs} alt='Ilustração icone Reactjs' />
                        </S.BoxReactjs>
                    </S.ContainerSkills>
                </S.ContainerPerfilSkills>
            </S.ContainerMain>
            <Footer/>
        </S.ContainerHome>
    );
}