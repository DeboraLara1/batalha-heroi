/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components';
import search from './../../img/search.svg'


const Contaneir = styled.div`
    min-height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3);
    grid-template-rows: 11vh 83vh 6vh; 

    @media screen and (max-width:780px) {
        height: 100vh;
        width: 100%;
        display: grid;
        
        grid-template-columns: auto ;
        grid-template-rows: 9vh auto 6vh;
    }

`
const Header = styled.div`
    background-color: #adacac;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Main = styled.div`
    background-color: pink;
`

const Footer = styled.div`
    background-color: blue;
`

const Search = styled.input`
    width: 25rem;
    height: 1.6rem;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-size: 1rem;
    background-position: 5px 5px;
    padding-left: 1.8rem;
    border-radius: 20px;
    border: 1px solid #929191;

    @media screen and (max-width:750px) {
        width: 14rem;
        height: 1.2rem;
        background-size: 0.8rem;
    }
`

export default {
    Contaneir,
    Header,
    Main,
    Footer,
    Search

}