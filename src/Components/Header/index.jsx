import React from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'

export default function Header(){
	return(
		
		<S.ContainerHeader>
			<h1>Helio Junior - Desenvolvedor em desenvolvimento</h1>
			<S.BarLink>
				<Link class="decohome" to='/home'><p>Home</p></Link>
				<Link class="decobio" to='/bio'><p>Biografia</p></Link>
				<Link class="decoprojetos" to='/projetos'><p>Projetos</p></Link>
				<Link class="decosocial" to='/social'><p>Social</p></Link>
				<Link class="decocontatos" to='/contatos'><p>Contatos</p></Link>
			</S.BarLink>
		</S.ContainerHeader>
		
	);
}