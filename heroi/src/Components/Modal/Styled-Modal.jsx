import styled from "styled-components";

const H2 = styled.h2`
    display: grid;
    justify-items: center;  
    color: #ffffff;
`

const WrapperHerois = styled.div`
   display: grid;
   grid-template-columns: repeat(2,1fr);
`

const Batalha = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
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
    left: 22rem;
    top: 11.5rem;
`

export default{
    H2,
    WrapperHerois,
    Batalha,
    Comparação,
    P,
    ImagemEscudo
}