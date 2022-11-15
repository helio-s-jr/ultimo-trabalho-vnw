import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import * as S from './style'
import Header from '../../Components/Header/index'
import Footer from '../../Components/Footer/index'
import { ThemeConsumer } from 'styled-components'

export default function Contatos(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            alert('Favor, preencher todos os campos');
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        emailjs.send('service_2obj23u', 'template_i64h2ym','templateParams', '7s9t5arp0PeGjrtiw')
        .then((response)=>{
            console.log('EMAIL ENVIADO', response.status, response.text)
            setName(''),
            setEmail(''),
            setMessage('')
        }, (err) => {
            console.log('Erro: ', err)
        })
    }

    return(
        <S.ContainerContacts>
            <Header/>
            <S.ContainerMainContacts>
                <h1>Contato</h1>
                <form onSubmit={sendEmail}>
                    <input 
                        type='text' 
                        placeholder='Digite seu nome'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input 
                        type='text' 
                        placeholder='Digite seu email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <textarea 
                        type='text' 
                        placeholder='Digite sua mensagem'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                    <input 
                        type='submit' 
                        value='Enviar'
                    />
                </form>
            </S.ContainerMainContacts>
            <Footer/>
        </S.ContainerContacts>
    );
}