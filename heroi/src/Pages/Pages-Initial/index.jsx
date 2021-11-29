import React, { useState, useEffect} from 'react'
import Styled from './Styled.jsx'

import Cards from '../../Components/Card'
import Modal from '../../Components/Modal'
import ListAPI from './../../Service/Api-MetaHumanos/MetaHumano.jsx';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [filtro, setFiltro] = useState('');
    const [listHero, setListHero] = useState([]);
    const [batalha, setBatalha] = useState ([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [winner, setWinner] = useState();
    const [winnerIndex, setWinnerIndex] = useState();
 
    useEffect(() => {
        const listInitial = async () => {
            const list = await ListAPI.getList();
            setListHero(list);
        };
        listInitial()
        
    }, []);

    const handleChange = (event) => {
        setFiltro(event.target.value);
    };

    const filtroHero = listHero.filter((hero) => {
        return hero.name.toLowerCase().includes(filtro.toLowerCase())
    })

    const handleHeroClick = (hero) => {
        const newBatalha = [...batalha, hero]
        setBatalha(newBatalha)
    }


    const handleOpenModal = () => {

        if(batalha.length === 1){
            setModalIsOpen(true)
        } 
        
        if (batalha.length === 2) {
            compareAttributes(batalha)
        }
    }

    const handleCloseModal = () => {
        setBatalha([])
        setModalIsOpen(false)
    }

    const compareAttributes = (batalha) => {
        let firstHeroBiggerAttributes = [];
        let secondHeroBiggerAttributes = []

        if (batalha != null && batalha[0] != null && batalha[1] != null) {
            let first = batalha[0].powerstats;
            let second = batalha[1].powerstats;

            // Intelligence
            first.intelligence > second.intelligence ? firstHeroBiggerAttributes.push(first.intelligence) :  secondHeroBiggerAttributes.push(second.intelligence);

            // Strength
            first.strength > second.strength ? firstHeroBiggerAttributes.push(first.strength) :  secondHeroBiggerAttributes.push(second.strength);

            // Speed
            first.intelligence > second.intelligence ? firstHeroBiggerAttributes.push(first.intelligence) :  secondHeroBiggerAttributes.push(second.intelligence);

            // Durability
            first.durability > second.durability ? firstHeroBiggerAttributes.push(first.durability) :  secondHeroBiggerAttributes.push(second.durability);

            // Power
            first.power > second.power ? firstHeroBiggerAttributes.push(first.power) :  secondHeroBiggerAttributes.push(second.power);

            // Combat
            first.combat > second.combat ? firstHeroBiggerAttributes.push(first.combat) :  secondHeroBiggerAttributes.push(second.combat);


            let winnerName = "";
            let winnerIndex = 0;
            if (firstHeroBiggerAttributes.length > secondHeroBiggerAttributes.length) {
                winnerName = batalha[0].name;
                winnerIndex = 1;
            } else if (firstHeroBiggerAttributes.length < secondHeroBiggerAttributes.length) {
                winnerName = batalha[1].name;
                winnerIndex = 2;
            } else {
                winnerName = "Empate";
            }
            console.log("Ganhador: " + winnerName)
            console.log("Ganhador index: " + winnerIndex)
            setWinner(winnerName)
            setWinnerIndex(winnerIndex);
        }
    }


    return(
        
        <Styled.Contaneir>
            <Styled.Header>
            <Styled.Search  
                type="text" 
                value={filtro} 
                onChange={handleChange} 
                placeholder="Busca" 
            />
            </Styled.Header>
            <Styled.Main>
                <Modal batalha={batalha} modalIsOpen={modalIsOpen} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} winner={winner}/>
                <Cards dataHeroList={filtroHero}  handleHeroClick={handleHeroClick} handleOpenModal={handleOpenModal}/>
            </Styled.Main>
        </Styled.Contaneir>
        
    )

}
