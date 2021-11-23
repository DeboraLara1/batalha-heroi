import React, { useState, useEffect} from 'react'
import Styled from './Styled.jsx'

import Card from '../../Components/Card'
import Modal from '../../Components/Modal'
import ListAPI from './../../Service/Api-MetaHumanos/MetaHumano.jsx';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [filtro, setFiltro] = useState('')
    const [listHero, setListHero] = useState([]);
    const [batalha, setBatalha] = useState ([])
 
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
    console.log(batalha)
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
                <Modal batalha={batalha}/>
                <Card dataHeroList={filtroHero} handleHeroClick={handleHeroClick}/>
            </Styled.Main>
        </Styled.Contaneir>
        
    )

}
