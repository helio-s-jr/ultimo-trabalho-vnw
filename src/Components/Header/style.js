import styled from 'styled-components'
import '../../Global/index.css'

//Container da Header com Logo, nome e links das rotas
export const ContainerHeader = styled.section`

    width: 100%;
    height: 10vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    text-decoration-line: none;
    border-bottom: 3px -moz-box-shadow: 0px 20px 25px #8A038C;
    -webkit-box-shadow: 0px 0px 12px #8A038C;
    background-color: #D6D6D6;
`
//Container com Logo e Título
export const ContainerLogoTitle = styled.section`

    width: 50%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    background-color: none;
`
//Caixa da Imgem Logo
export const BoxLogo = styled.figure`

    Width: 15%;
    object-fit: cover;
    align-items: center;
    justify-items: center;
    justify-content: center;
    background-color: none;
`
//Logo na página
export const ImageLogo = styled.img`

    width: 4.5rem;
    object-fit: cover;
    align-items: center;
    border-radius: 50px;
    border: -moz-box-shadow: 0px 20px 25px #8A038C;
    -webkit-box-shadow: 0px 0px 12px #8A038C;
    background-color: #737373;
`

//Título da página
export const TitleHeader = styled.h1`

    width: 80%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: start;
    font-size: 1.5em;
    font-family: Ananda;
    font-weight: 750;
    letter-spacing: 0.3rem;
    color: #8A038C;
    background-color: none;
`

//Links das rotas
export const BarLink = styled.nav`

    width: 50%;
    display: flex;
    justify-items: end;
    justify-content: space-evenly;
    text-decoration-line: none;
    background-color: none;
`
