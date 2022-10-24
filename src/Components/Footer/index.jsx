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
                <S.ParagraFooter>Desenvolvedor: Helio Junior &copy;</S.ParagraFooter>
                <S.ParagraFooter>Para o curso Vai na Web</S.ParagraFooter>
            </S.BoxParagrf>
            <S.ContainerSocialMidias>
                <S.BoxFigFooter>
                        <a class='imgs-footer'href="https://www.facebook.com/helio.slv.junior/" target='blank'><S.ImageFooter src={Face} alt='Ilustração Icone Facebook' /></a>
                </S.BoxFigFooter >
                <S.BoxFigFooter>
                        <a class='imgs-footer'href="https://www.instagram.com/hellio.jr/?hl=pt-br" target='blank'><S.ImageFooter src={Insta} alt='Ilustração Icone Instagram' /></a>
                </S.BoxFigFooter>
                <S.BoxFigFooter>
                        <a class='imgs-footer'href="https://twitter.com/binhozapata" target='blank'><S.ImageFooter src={Twitter} alt='Ilustração Icone Twitter' /></a>
                </S.BoxFigFooter>
                <S.BoxFigFooter>
                        <a class='imgs-footer'href="https://web.whatsapp.com/send?phone=+5521969101427" target='blank'><S.ImageFooter src={Whats} alt='Ilustração Icone Whatsapp' /></a>
                </S.BoxFigFooter>
                <S.BoxFigFooter>
                        <a class='imgs-footer'href="https://github.com/helio-s-jr" target='blank'><S.ImageFooter src={Github} alt='Ilustração Icone Github' /></a>
                </S.BoxFigFooter>
                <S.BoxFigFooter>
                        <a class='imgs-footer'href="https://www.linkedin.com/in/helio-s-junior/" target='blank'><S.ImageFooter src={Linkedin} alt='Ilustração Icone Linkedin' /></a>
                </S.BoxFigFooter>
            </S.ContainerSocialMidias>
        </S.ContainerFooter>
    );
}