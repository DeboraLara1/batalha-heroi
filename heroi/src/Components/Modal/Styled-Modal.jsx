import styled from "styled-components";

const H2 = styled.h2`
    display: grid;
    justify-items: center;  
    color: #ffffff;
    margin-bottom: 4.5rem;
`

const WrapperHerois = styled.div`
   display: grid;
   grid-template-columns: repeat(2,2fr);
`

const Batalha = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    justify-items: center;
    padding-left: 1.5rem;

    @media screen and (max-width:630px) {

        img{
            max-width: 7rem;
        }
        height: 100vh;
        width: 100%;
        display: grid;
        grid-template-columns: auto ;
        grid-template-rows: auto ;
        align-content: stretch;
    }
`

const Comparação = styled.div `
    font-weight: bold;
    color: #ffffff;
`

const P = styled.p `
    font-weight: bold;

    @media screen and (max-width:460px) {
        font-size: 13px;
    }
`

const ImagemEscudo = styled.img `
    max-width: 40px;
    max-width: 40px;
    position: fixed;
    left: 41.5%;
    top: 51%;
`

const NameHero = styled.h4 `
    position: fixed;
    left: ${props => props.left ? '51px' : 'none'};
    right: ${props => props.right ? '13rem' : 'none'};
    top: 3.5rem;
    color: white;
    font-size: 23px;
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