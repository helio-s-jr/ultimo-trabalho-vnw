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
				<S.TitleHeader>Helio Junior - Desenvolvedor em desenvolvimento</S.TitleHeader>
			</S.ContainerLogoTitle>
			
			
			<S.BarLink>
				<Link class="decohome" to='/home'><S.P>Home</S.P></Link>
				<Link class="decobio" to='/bio'><S.P>Biografia</S.P></Link>
				<Link class="decoprojetos" to='/projetos'><S.P>Projetos</S.P></Link>
				<Link class="decosocial" to='/social'><S.P>Social</S.P></Link>
				<Link class="decocontatos" to='/contatos'><S.P>Contatos</S.P></Link>
			</S.BarLink>
		</S.ContainerHeader>
		
	);
}