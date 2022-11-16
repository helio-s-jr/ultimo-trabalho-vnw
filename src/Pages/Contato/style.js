import styled from 'styled-components'

export const ContainerContact = styled.section`

    width: 100%;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: none;
`

export const ContainerMainContact = styled.section`

    width: 100%;
    height: 100vh;
    display: flex;
    margin-top: 4px;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #737373;
`


export const ContainerForm = styled.section`

    width: 45%;
    height: 65vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 50px;
    border: -moz-box-shadow: 0px 20px 30px #8A038C;
    -webkit-box-shadow: 0px 0px 25px #8A038C;
    background-color: rgba(214,214,214,0.5);
`

export const H1Contact = styled.h1`

    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 30pt;
    background-color: none;
`

export const Form = styled.form`

    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: none;
`


export const Input = styled.input`

    width: 60%;
    height: 5vh;
    margin: -5px;
    align-items: center;
    text-align: start;
    border-radius: 10px;
    outline: 0;
    justify-content: center;
    :focus{
        background-color: #f7d1f8;
    }
`

export const TextArea = styled.textarea`

    width: 60%;
    height: 20vh;
    margin: -5px;
    align-items: center;
    text-align: start;
    border-radius: 10px;
    resize: none;
    outline: 0;
    justify-content: center;
    :focus{
        background-color: #f7d1f8;
    }
`

export const Button = styled.input`

    width: 60%;
    height: 5vh;
    margin: -5px;
    align-items: center;
    text-align: center;
    font-size: 20pt;
    cursor: pointer;
    border-radius: 10px;
    

    :hover{
        background: #f7d1f8;
    }
`