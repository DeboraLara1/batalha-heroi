import styled from "styled-components";

const H2 = styled.h2`
    display: grid;
    justify-items: center;    
`

const WrapperHerois = styled.div`
   display: grid;
   grid-template-columns: repeat(2,1fr);
`

const Batalha = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    justify-items: center;
`

const Comparação = styled.div `
    font-weight: bold;
`

const P = styled.p `
    font-weight: bold;
`


export default{
    H2,
    WrapperHerois,
    Batalha,
    Comparação,
    P
}