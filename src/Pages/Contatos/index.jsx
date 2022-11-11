import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as S from './style'
import Header from '../../Components/Header/index'
import Footer from '../../Components/Footer/index'

export default function Contatos(){
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState('');

    return(
        <S.ContainerContacts>
            <Header/>
            <S.ContainerMainContacts>
                <form>
                    <input {...register('fullName')} placeholder='Nome Completo' />
                    <textarea {...register('yourMensager')} placeholder='Digite aqui sua mensagem'/>
                    <p>{data}</p>
                    <input type='submit'/>
                </form>
            </S.ContainerMainContacts>
            <Footer/>
        </S.ContainerContacts>
    );
}