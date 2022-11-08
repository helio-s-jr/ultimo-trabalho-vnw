import React from 'react'
import * as S from './style'
import Header from '../../Components/Header/index'
import Footer from '../../Components/Footer/index'

export default function Contatos(){
    return(
        <S.ContainerContacts>
            <Header/>
            <S.ContainerMainContacts>
                <h1>Pagina para todos os contatos</h1>
            </S.ContainerMainContacts>
            <Footer/>
        </S.ContainerContacts>
    );
}