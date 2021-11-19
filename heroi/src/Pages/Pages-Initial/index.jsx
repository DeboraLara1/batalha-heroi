import React, { useState, useEffect} from 'react'
import Styled from './Styled.jsx'

import Card from '../../Components/Card'
import ListAPI from './../../Service/Api-MetaHumanos/MetaHumano.jsx';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [filtro, setFiltro] = useState('')

    const [listHero, setListHero] = useState([]);

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
                <Card dataHeroList={filtroHero} />
            </Styled.Main>
        </Styled.Contaneir>
        
    )

}
