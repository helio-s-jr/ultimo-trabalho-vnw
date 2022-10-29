import React, { useState } from 'react'
import * as S from './style'
import Header from '../../Components/Header/index'
import Footer from '../../Components/Footer/index'
import Modal from 'react-modal'
import ImageLittleKite from '../../Assets/Imagens-Biografia/Helio-crianca-pipa.jpg'
import ImageLittleParty from '../../Assets/Imagens-Biografia/Helio-crianca-festa.jpg'
import ImageFatherChildren from '../../Assets/Imagens-Biografia/Helio-pai.jpg'
import ImageFatherDog from '../../Assets/Imagens-Biografia/Helio-pai-de-pet.jpg'
//import ImageBoyFriend from '../../Assets/Imagens-Biografia/Helio-namorado.jpg'
//import ImageMusician from '../../Assets/Imagens-Biografia/Helio-musico.jpg'
//import ImageReligion from '../../Assets/Imagens-Biografia/Helio-umbandista.jpg'
import Administrative from '../Bio/Perfil-Adm/index'
import Driver from '../Bio/Perfil-Drive/index'
import Social from '../Bio/Perfil-Social/index'
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
        <S.ContainerBio>
            <Header/>
            <S.ContainerMainBio>
                <S.BoxTitleSub>
                    <S.TitleMainBio>Olá, me chamo Helio Junior</S.TitleMainBio>
                    <S.SubTitleMainBio>Sejam muito bem vindos!</S.SubTitleMainBio>
                </S.BoxTitleSub>
                <S.ContainerArticleBio>
                    <S.ArticleInfanciaMainBio>
                        <S.ParagrafsArticleBio>Nascido em 1988, direto da zona oeste do Rio de Janeiro e filho de um segurança e uma empregada doméstica, sempre usa da própria criantivade para poder brincar e me divertir mesmo que sozinho.</S.ParagrafsArticleBio>
                        <S.ParagrafsArticleBio>Infância rica de brincadeiras que hoje em dia não se tem mais, passava hora criando desenhos, aviãozinho de palito de fósforo e fingindo ser motorista de ônibus com um volante velho.</S.ParagrafsArticleBio>
                        <S.ParagrafsArticleBio>Passei pelos anos 90 e 2000 curtindo o que todos curtiam com a antiga Rede Manchete, Cavaleiros do Zodíaco e posteriormente a Tv Globinho.</S.ParagrafsArticleBio>
                        <S.ImageLittleKite src={ImageLittleKite} alt="Fotografia Helio Junior criança com pipa na mão" />
                        <S.ParagrafsArticleBio>Estudando 100% da vida em escolas públicas, tive o privilégio de conhecer o ensino de melhor qualidade me foi apresentado</S.ParagrafsArticleBio>
                        <S.ParagrafsArticleBio>Estudando 100% da vida em escolas públicas, tive o privilégio de conhecer o ensino de melhor qualidade me foi apresentado</S.ParagrafsArticleBio>
                        <S.ImageLittleParty src={ImageLittleParty} alt="Fotografia Helio Junior criança em festa junina" />
                        <S.ParagrafsArticleBio>Estudando 100% da vida em escolas públicas, tive o privilégio de conhecer o ensino de melhor qualidade me foi apresentado</S.ParagrafsArticleBio>
                        <S.ParagrafsArticleBio>Estudando 100% da vida em escolas públicas, tive o privilégio de conhecer o ensino de melhor qualidade me foi apresentado</S.ParagrafsArticleBio>
                    </S.ArticleInfanciaMainBio>
                    
                    {/* Artigo com filhos */}
                    <S.ArticleFatherMainBio>
                        <S.ParagrafsArticleBio>Nascido em 1988, direto da zona oeste do Rio de Janeiro e filho de um segurança e uma empregada doméstica, sempre usa da própria criantivade para poder brincar e me divertir mesmo que sozinho.</S.ParagrafsArticleBio>
                        <S.ParagrafsArticleBio>Infância rica de brincadeiras que hoje em dia não se tem mais, passava hora criando desenhos, aviãozinho de palito de fósforo e fingindo ser motorista de ônibus com um volante velho.</S.ParagrafsArticleBio>
                        <S.ParagrafsArticleBio>Passei pelos anos 90 e 2000 curtindo o que todos curtiam com a antiga Rede Manchete, Cavaleiros do Zodíaco e posteriormente a Tv Globinho.</S.ParagrafsArticleBio>
                        <S.ImageFatherChildren src={ImageFatherChildren} alt="Fotografia Helio Junior com seus filhos e namorada" />
                        <S.ParagrafsArticleBio>Estudando 100% da vida em escolas públicas, tive o privilégio de conhecer o ensino de melhor qualidade me foi apresentado</S.ParagrafsArticleBio>
                        <S.ParagrafsArticleBio>Estudando 100% da vida em escolas públicas, tive o privilégio de conhecer o ensino de melhor qualidade me foi apresentado</S.ParagrafsArticleBio>
                        <S.ImageFatherDog src={ImageFatherDog} alt="Fotografia Helio Junior com seu cachorro" />
                        <S.ParagrafsArticleBio>Estudando 100% da vida em escolas públicas, tive o privilégio de conhecer o ensino de melhor qualidade me foi apresentado</S.ParagrafsArticleBio>
                        <S.ParagrafsArticleBio>Estudando 100% da vida em escolas públicas, tive o privilégio de conhecer o ensino de melhor qualidade me foi apresentado</S.ParagrafsArticleBio>
                    </S.ArticleFatherMainBio>
                </S.ContainerArticleBio>
                
                <S.ContainerCardsBio>
                    {/*Início do Card Administrativo*/}
                    <S.CardAdm onClick={() =>{ChangeAdministrative()}}>
                        <S.FigureCardAdm>
                            <S.ImageAdm src={ImageAdm} alt="Fotografia Helio Junior Administrativo" />
                        </S.FigureCardAdm>
                        <S.H2CardAdm>Administrativo</S.H2CardAdm>
                        <Modal isOpen={administrative}
                        onRequestClose={ChangeAdministrative}
                        style={{overlay: {
                            width: '100%',
                            display: 'flex',
                            margin: '0 auto',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(138, 3, 140,0.7)'},
                            content:{
                                width: '80%',
                                display: 'flex',
                                margin: '0 auto',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 'none',
                                borderRadius: '40px',
                                backgroundColor: 'rgba(214,214,214,0.7)'
                            }
                            }}>
                                <Administrative close={ChangeAdministrative}/>
                        </Modal>
                        <S.FigureStickerAdm>
                            <S.StickerCardAdm src={StickerAdm} alt="Ilustração Engranagem e Multiplos Check" />
                        </S.FigureStickerAdm>
                    </S.CardAdm>

                    
                    {/*Início do Card Motorista*/}
                    <S.CardDriver onClick={() =>{ChangeDriver()}}>
                        <S.FigureCardDriver>
                            <S.ImageDriver src={ImageDriver} alt="Fotografia Helio Junior Motorista de Aplicativo" />
                        </S.FigureCardDriver>
                        <S.H2CardDriver>Motorista</S.H2CardDriver>
                        <Modal isOpen={driver}
                        onRequestClose={ChangeDriver}
                        style={{overlay: {
                            width: '100%',
                            display: 'flex',
                            margin: '0 auto',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(138, 3, 140,0.7)'},
                            content:{
                                width: '80%',
                                display: 'flex',
                                margin: '0 auto',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 'none',
                                borderRadius: '40px',
                                backgroundColor: 'rgba(214,214,214,0.7)'
                            }
                            }}>
                                <Driver close={ChangeDriver}/>
                        </Modal>
                        <S.FigureStickerDriver>
                            <S.StickerCardDriver src={StickerDriver} alt="Ilustração Celular e Carro de Aplicativo" />
                        </S.FigureStickerDriver>
                    </S.CardDriver>


                    {/*Início do Card Social*/}
                    <S.CardSocial onClick={() =>{ChangeSocial()}}>
                        <S.FigureCardSocial>
                            <S.ImageSocial src={ImageSocial} alt="Fotografia Helio Junior Informal" />
                        </S.FigureCardSocial>
                        <S.H2CardSocial>Social</S.H2CardSocial>
                        <Modal isOpen={social}
                        onRequestClose={ChangeSocial}
                        style={{overlay: {
                            width: '100%',
                            display: 'flex',
                            margin: '0 auto',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(138, 3, 140,0.7)'},
                            content:{
                                width: '80%',
                                display: 'flex',
                                margin: '0 auto',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 'none',
                                borderRadius: '40px',
                                backgroundColor: 'rgba(214,214,214,0.7)'
                            }
                            }}>
                                <Social close={ChangeSocial}/>
                        </Modal>
                        <S.FigureStickerDriver>
                            <S.StickerCardDriver src={StickerSocial} alt="Ilustração Pessoas Conversando" />
                        </S.FigureStickerDriver>
                    </S.CardSocial>
                </S.ContainerCardsBio>
            </S.ContainerMainBio>
            <Footer/>
        </S.ContainerBio>
    );
}