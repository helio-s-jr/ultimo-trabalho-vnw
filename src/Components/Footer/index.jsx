import React from 'react'
import * as S from './style'
import Face from '../../Assets/Midias-sociais/Facebook.png'
import Insta from '../../Assets/Midias-sociais/Instagram.png'
import Twitter from '../../Assets/Midias-sociais/Twitter.png'
import Whats from '../../Assets/Midias-sociais/Whatsapp.png'
import Github from '../../Assets/Midias-sociais/Github.png'
import Linkedin from '../../Assets/Midias-sociais/Linkedin.png'

export default function Footer(){
    return(
        <S.ContainerFooter>
            <S.BoxParagrf>
                <p>Desenvolvido por Helio Junior.</p>
                <p>Projeto do curso Vai na Web</p>
            </S.BoxParagrf>
            <S.ContainerSocialMidias>
                <figure>
                        <a href="https://www.facebook.com/helio.slv.junior/" target='blank'><img src={Face} alt='Ilustração Icone Facebook' /></a>
                </figure>
                <figure>
                    
                </figure>
                <figure>
                        <a href="https://www.instagram.com/hellio.jr/?hl=pt-br" target='blank'><img src={Insta} alt='Ilustração Icone Instagram' /></a>
                </figure>
                <figure>
                        <a href="https://twitter.com/binhozapata" target='blank'><img src={Twitter} alt='Ilustração Icone Twitter' /></a>
                </figure>
                <figure>
                        <a href=""><img src={Whats} alt='Ilustração Icone Whatsapp' /></a>
                </figure>
                <figure>
                        <a href="https://github.com/helio-s-jr" target='blank'><img src={Github} alt='Ilustração Icone Github' /></a>
                </figure>
                <figure>
                        <a href="https://www.linkedin.com/in/helio-s-junior/" target='blank'><img src={Linkedin} alt='Ilustração Icone Linkedin' /></a>
                </figure>
            </S.ContainerSocialMidias>
        </S.ContainerFooter>
    );
}