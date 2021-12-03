import styled from "styled-components";

const H2 = styled.h2`
    display: grid;
    justify-items: center;  
    color: #47e221;
    margin-bottom: 4.5rem;

    @media screen and (max-width:460px) {
        margin-bottom: 10px;
        margin-top: 0px;
    }
`

const WrapperHerois = styled.div`
   display: grid;
   grid-template-columns: repeat(2,2fr);
`

const Batalha = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    padding-left: 1.5rem;

    @media screen and (max-width:630px) {

        height: 36vh;
        width: 100%;
        display: grid;
        align-content: stretch;
        align-items: center;
        
        img{
            max-width: 5rem;
        }
    }

    @media screen and (max-width:460px) {
        grid-template-columns: repeat(2, 1fr) ;
        padding-left: 0px;
        margin-top: 2rem;
    }
`

const Comparação = styled.div `
    font-weight: bold;
    color: #ffffff;
    @media screen and (max-width:460px) {
        grid-template-columns: repeat(2, 1fr) ;
        margin-left: ${props => props.marginLeft ? '2rem' : '9px'};
        margin-right: ${props => props.marginRight ? '2rem' : '0px'};
    }
`

const P = styled.p `
    font-weight: bold;

    @media screen and (max-width:460px) {
        font-size: 10px;
    }
`

const ImagemEscudo = styled.img `
    max-width: 40px;
    position: fixed;
    left: 48.4%;
    top: 60%;
    
    @media screen and (max-width:460px) {
        max-width: 2rem;
        left: 45%;
        top: 53%;
    }
`

const NameHero = styled.h4 `
    position: fixed;
    left: ${props => props.left ? '51px' : 'none'};
    right: ${props => props.right ? '9rem' : 'none'};
    top: 3.5rem;
    color: white;
    font-size: 23px;

    @media screen and (max-width:460px) {
        font-size: 14px;
        top: 4rem;
        right: ${props => props.right ? '3rem' : 'none'};
        left: ${props => props.left ? '31px' : 'none'};
    }
`

export default{
    H2,
    WrapperHerois,
    Batalha,
    Comparação,
    P,
    ImagemEscudo,
    NameHero
}