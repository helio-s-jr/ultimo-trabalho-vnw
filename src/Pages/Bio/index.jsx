import React from 'react'
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
    return(
        <div>
            <S.ContainerBio>
                <Header/>
                <S.ContainerMainBio>
                    <S.BoxH1MainBio>
                        <h1>Olá! Me chamo Hélio Junior.</h1>
                    </S.BoxH1MainBio>
                    <S.ArticleAdm>
                        <figure>
                            <img src={ImageAdm} alt='Fotografia Helio Administrativo'/>
                        </figure>
                        <div>
                            <h2>Esse é o subtítulo adm</h2>
                            <p>Esse é onde conto um pouco da história</p>
                            <p>Esse é onde conto um pouco da história</p>
                            <p>Esse é onde conto um pouco da história</p>
                        </div>
                        <figure>
                            <img src={StickerAdm} alt='Ilustração de logo administrativo'/>
                        </figure>
                    </S.ArticleAdm>
                    <S.ArticleDriver>
                        <figure>
                            <img src={ImageDriver} alt='Fotografia Helio Motorista de Aplicativo'/>
                        </figure>
                        <div>
                            <h2>Esse é o subtítulo motorista</h2>
                            <p>Esse é onde conto um pouco da história</p>
                            <p>Esse é onde conto um pouco da história</p>
                            <p>Esse é onde conto um pouco da história</p>
                        </div>
                        <figure>
                            <img src={StickerDriver} alt='Ilustração de logo motorista'/>
                        </figure>
                    </S.ArticleDriver>
                    <S.ArticleSocial>
                        <figure>
                            <img src={ImageSocial} alt='Fotografia Helio Social'/>
                        </figure>
                        <div>
                            <h2>Esse é o subtítulo Social</h2>
                            <p>Esse é onde conto um pouco da história</p>
                            <p>Esse é onde conto um pouco da história</p>
                            <p>Esse é onde conto um pouco da história</p>
                        </div>
                        <figure>
                            <img src={StickerSocial} alt='Ilustração de logo social'/>
                        </figure>
                    </S.ArticleSocial>
                </S.ContainerMainBio>
                <Footer/>
            </S.ContainerBio>
        </div>
    );
}