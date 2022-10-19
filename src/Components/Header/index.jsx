import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
	return(
			
		<nav>
			<Link to='/home'><p>Home</p></Link>
			<Link to='/bio'><p>Biografia</p></Link>
			<Link to='/projetos'><p>Projetos</p></Link>
			<Link to='/social'><p>Social</p></Link>
			<Link to='/contatos'><p>Contatos</p></Link>
	 	</nav>
		
	);
}










/* 
 
 <nav>
			<Link to='/home'><p>Home</p></Link>
			<Link to='/bio'><p>Biografia</p></Link>
			<Link to='/projetos'><p>Projetos</p></Link>
			<Link to='/social'><p>Social</p></Link>
			<Link to='/contatos'><p>Contatos</p></Link>
		 </nav>

*/