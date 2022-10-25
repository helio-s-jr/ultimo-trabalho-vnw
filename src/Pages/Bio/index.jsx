import React, { useState} from 'react'
import * as S from './style'
import Header from '../../Components/Header/index'
import Footer from '../../Components/Footer/index'
import ImageAdm from '../../Assets/Perfil/Perfil-adm/perfil-bio-adm.jpg'
import StickerAdm from '../../Assets/Perfil/Perfil-adm/Adm.png'
import ImageDriver from '../../Assets/Perfil/Perfil-motorista/perfil-bio-motorista.jpg'
import StickerDriver from '../../Assets/Perfil/Perfil-motorista/Uber.png'
import ImageSocial from '../../Assets/Perfil/Perfil-social/perfil-bio-social.jpg'
import StickerSocial from '../../Assets/Perfil/Perfil-social/Social.png'

export default function Bio(){

    const [administrative, setAdministrative] = useState(false)
    const [driver, setDriver] = useState(false)
    const [social, setSocial] = useState(false)

    function ChangeAdministrative(){
        setAdministrative(!administrative)
    }

    function ChangeDriver(){
        setDriver(!driver)
    }

    function ChangeSocial(){
        setSocial(!social)
    }


    return(
        <div>
            <S.ContainerBio>
                <Header/>
                <S.ContainerMainBio>
                    <S.BoxH1MainBio>
                        <S.H1MainBio>Olá! Me chamo Helio Junior.</S.H1MainBio>
                    </S.BoxH1MainBio>
                    <S.ArticleAdm>
                        <S.BoxFigureTextsAdm>
                            <S.FigureArtAdm>
                                <S.ImageAdm src={ImageAdm} alt='Fotografia Helio Administrativo'/>
                            </S.FigureArtAdm>
                            <S.BoxSubParagAdm>
                                <h2>Esse é o subtítulo adm</h2>
                                <p>Esse é onde conto um pouco da história</p>
                                <p>Esse é onde conto um pouco da história</p>
                                <p>Esse é onde conto um pouco da história</p>
                            </S.BoxSubParagAdm>
                        </S.BoxFigureTextsAdm>
                        <S.FigureStickerAdm>
                            <S.ImageStickerAdm src={StickerAdm} alt='Ilustração de logo administrativo'/>
                        </S.FigureStickerAdm>
                    </S.ArticleAdm>
                    <S.ArticleDriver>
                        <S.BoxFigureTextsDriver>
                            <S.FigureArtDriver>
                                <S.ImageDriver src={ImageDriver} alt='Fotografia Helio Motorista de Aplicativo'/>
                            </S.FigureArtDriver>
                            <S.BoxSubParagDriver>
                                <h2>Esse é o subtítulo motorista</h2>
                                <p>Esse é onde conto um pouco da história</p>
                                <p>Esse é onde conto um pouco da história</p>
                                <p>Esse é onde conto um pouco da história</p>
                            </S.BoxSubParagDriver>
                        </S.BoxFigureTextsDriver>
                        <S.FigureStickerDriver>
                            <S.ImageStickerDriver src={StickerDriver} alt='Ilustração de logo motorista'/>
                        </S.FigureStickerDriver>
                    </S.ArticleDriver>
                    <S.ArticleSocial>
                        <S.BoxFigureTextsSocial>
                            <S.FigureArtSocial>
                                <S.ImageSocial src={ImageSocial} alt='Fotografia Helio Social'/>
                            </S.FigureArtSocial>
                            <S.BoxSubParagSocial>
                                <h2>Esse é o subtítulo Social</h2>
                                <p>Esse é onde conto um pouco da história</p>
                                <p>Esse é onde conto um pouco da história</p>
                                <p>Esse é onde conto um pouco da história</p>
                            </S.BoxSubParagSocial>
                        </S.BoxFigureTextsSocial>
                        <S.FigureStickerSocial>
                            <S.ImageStickerSocial src={StickerSocial} alt='Ilustração de logo social'/>
                        </S.FigureStickerSocial>
                    </S.ArticleSocial>
                </S.ContainerMainBio>
                <Footer/>
            </S.ContainerBio>
        </div>
    );
}