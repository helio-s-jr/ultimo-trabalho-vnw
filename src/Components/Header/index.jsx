import React from 'react'
import * as S from './style'
import Logo from '../../Assets/Logo/Logo2.png'
import { Link } from 'react-router-dom'

export default function Header(){
	return(
		
		<S.ContainerHeader>
			<S.ContainerLogoTitle>
				<S.BoxLogo>
					<S.ImageLogo src={Logo} alt='Ilustração da Logo'/>
				</S.BoxLogo>
				<S.TitleHeader>&#10100;Helio Jr&bull;&#10101;</S.TitleHeader>
			</S.ContainerLogoTitle>
			
			
			<S.BarLink>
				<Link class="link-header" to='/'><p class='p-header'>Home</p></Link>
				<Link class="link-header" to='/bio'><p class='p-header'>Biografia</p></Link>
				<Link class="link-header" to='/projetos'><p class='p-header'>Projetos</p></Link>
				<Link class="link-header" to='/social'><p class='p-header'>Social</p></Link>
				<Link class="link-header" to='/contato'><p class='p-header'>Contato</p></Link>
			</S.BarLink>
		</S.ContainerHeader>
		
	);
}