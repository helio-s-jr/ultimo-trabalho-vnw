import styled from 'styled-components'

export const ContainerFooter = styled.section`

    width: 100%;
    height: 8vh;
    display: flex;
    margin: auto;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    background-color: #d6d6d6;
`

export const BoxParagrf = styled.div`

    width: 40%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
    background-color: none;
`

export const ParagraFooter = styled.p`

    width: 60%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 1.1em;
    font-weight: 750;
    color: #8A038C;
`

export const ContainerSocialMidias = styled.section`

    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: none;
`

export const BoxFigFooter = styled.figure`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: none;
`

export const ImageFooter = styled.img`

    width: 2rem;
    display: flex;
    margin: 0 auto;
    border-radius: 50px;
    border: -moz-box-shadow: 0px 20px 25px #8A038C;
    -webkit-box-shadow: 0px 0px 12px #8A038C;

    .img-footer{
        animation: shake 0.5s;
        animation-iteration-count: infinite;
    }
    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
      }
`
