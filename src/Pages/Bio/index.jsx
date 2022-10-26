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
                        <figure>
                            <img src={ImageAdm} alt="Fogografia Helio Junior Administrativo" />
                        </figure>
                        <h2>Administrativo</h2>
                        <Modal isOpen={administrative}
                        onRequestClose={ChangeAdministrative}
                        style={{overlay: {
                            display: 'flex',
                            margin: '0',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#8A038C'},
                            content:{
                                display: 'flex',
                                justifyContent: 'center',
                                border: 'none',
                                borderRadius: '40px',
                                backgroundColor: '#D6D6D6'
                            }
                            }}>
                                <Administrative close={ChangeAdministrative}/>
                        </Modal>
                        <img src={StickerAdm} alt="Ilustração Engranagem e Multiplos Check" />
                    </S.CardAdm>

                    
                    {/*Início do Card Motorista*/}
                    <section onClick={() =>{ChangeDriver()}}>
                        <figure>
                            <img src={ImageDriver} alt="Fogografia Helio Junior Motorista de Aplicativo" />
                        </figure>
                        <h2>Motorista</h2>
                        <Modal isOpen={driver}
                        onRequestClose={ChangeDriver}
                        style={{overlay: {
                            display: 'flex',
                            margin: '0',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#8A038C'},
                            content:{
                                display: 'flex',
                                justifyContent: 'center',
                                border: 'none',
                                borderRadius: '40px',
                                backgroundColor: '#D6D6D6'
                            }
                            }}>
                                <Driver close={ChangeDriver}/>
                        </Modal>
                        <img src={StickerDriver} alt="Ilustração Celular e Carro de Aplicativo" />
                    </section>


                    {/*Início do Card Social*/}
                    <section onClick={() =>{ChangeSocial()}}>
                        <figure>
                            <img src={ImageSocial} alt="Fogografia Helio Junior Informal" />
                        </figure>
                        <h2>Social</h2>
                        <Modal isOpen={social}
                        onRequestClose={ChangeSocial}
                        style={{overlay: {
                            display: 'flex',
                            margin: '0',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#8A038C'},
                            content:{
                                display: 'flex',
                                justifyContent: 'center',
                                border: 'none',
                                borderRadius: '40px',
                                backgroundColor: '#D6D6D6'
                            }
                            }}>
                                <Social close={ChangeSocial}/>
                        </Modal>
                        <img src={StickerSocial} alt="Ilustração Pessoas Conversando" />
                    </section>
                </S.ContainerCardsBio>
            </S.ContainerMainBio>
            <Footer/>
        </S.ContainerBio>
    );
}