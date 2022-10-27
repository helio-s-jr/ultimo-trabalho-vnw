import React, { useState } from 'react'
import * as S from './style'
import Header from '../../Components/Header/index'
import Footer from '../../Components/Footer/index'
import Modal from 'react-modal'
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
                    <S.SubTitleMainBio>E vou contar um pouco da minha trajetória profissional</S.SubTitleMainBio>
                </S.BoxTitleSub>
                <S.ContainerCardsBio>
                    {/*Início do Card Administrativo*/}
                    <S.CardAdm onClick={() =>{ChangeAdministrative()}}>
                        <S.FigureCardAdm>
                            <S.ImageAdm src={ImageAdm} alt="Fogografia Helio Junior Administrativo" />
                        </S.FigureCardAdm>
                        <S.H2CardAdm>Administrativo</S.H2CardAdm>
                        <Modal isOpen={administrative}
                        onRequestClose={ChangeAdministrative}
                        style={{overlay: {
                            width: '80%',
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
                            <S.ImageDriver src={ImageDriver} alt="Fogografia Helio Junior Motorista de Aplicativo" />
                        </S.FigureCardDriver>
                        <S.H2CardDriver>Motorista</S.H2CardDriver>
                        <Modal isOpen={driver}
                        onRequestClose={ChangeDriver}
                        style={{overlay: {
                            width: '80%',
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
                            <S.ImageSocial src={ImageSocial} alt="Fogografia Helio Junior Informal" />
                        </S.FigureCardSocial>
                        <S.H2CardSocial>Social</S.H2CardSocial>
                        <Modal isOpen={social}
                        onRequestClose={ChangeSocial}
                        style={{overlay: {
                            width: '80%',
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