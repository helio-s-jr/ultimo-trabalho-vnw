import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import * as S from './style'
import Header from '../../Components/Header/index'
import Footer from '../../Components/Footer/index'

export default function Contato(){
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
        <S.ContainerContact>
            <Header/>
            <S.ContainerMainContact>
                <S.ContainerForm>
                    <S.H1Contact>Contato</S.H1Contact>
                    <S.Form onSubmit={sendEmail}>
                        <S.Input
                            type='text'
                            placeholder='Digite seu nome'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <S.Input
                            type='text'
                            placeholder='Digite seu email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <S.TextArea
                            type='text'
                            placeholder='Digite sua mensagem'
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                        <S.Button 
                            type='submit'
                            value='Enviar'
                        />
                    </S.Form>
                </S.ContainerForm>
            </S.ContainerMainContact>
            <Footer/>
        </S.ContainerContact>
    );
}