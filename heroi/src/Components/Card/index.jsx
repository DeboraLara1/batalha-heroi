/* eslint-disable react/jsx-pascal-case */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import ListAPI from './../../Service/Api-MetaHumanos/MetaHumano.jsx';
import Styled from './Styled-Card';

export default () => {
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        const listInitial = async () => {
            const list = await ListAPI.getList();
            setListUser(list);
        };
        listInitial()
        
    }, []);

    console.log(listUser)

  return (
    <Styled.Section>
      <Styled.Row>
        {listUser.map((getLis) => (
            <Styled.metaHumanoRow key={getLis.id} >
              <div className="geral-moviesInitial">
                <Styled.ContainerImg>
                <img src={getLis.images.sm} alt={`Imagem do Meta Humano ${getLis.name}`} />
                <Styled.H3 key={getLis.id}>{ getLis.name }</Styled.H3>
                </Styled.ContainerImg>
              </div>
            </Styled.metaHumanoRow>
        ))}
      </Styled.Row>
    </Styled.Section>
  );
}