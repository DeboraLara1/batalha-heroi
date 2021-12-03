/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";

const Section = styled.div`
    
`
const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: baseline;
    @media screen and (max-width:1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(2, 2fr);
    }
    
`
const metaHumanoRow = styled.div`
    display: inline-block;
    width:150px;
    cursor: pointer;  
    margin-bottom: 25px;

`

const ContainerImg = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

    @media screen and (max-width: 640px) {
        grid-template-columns: repeat(2, 2fr);
        justify-items: center;
        img{
            min-width: 5rem; 
            margin-right:3px;

        }
    }
    @media screen and (max-width:1200px) {
        img{
            min-width: 6rem; 
            margin-right:2px;

        }
    }
    
`

const H3 = styled.h4`
    color: #ffffff;
    padding-left: 15px;
    @media screen and (max-width: 600px) {
        font-size: 12px;
        padding-left:0;
    }
`


export default{
    Section,
    Row,
    metaHumanoRow,
    ContainerImg,
    H3
}