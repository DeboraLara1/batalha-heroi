/* eslint-disable react/jsx-pascal-case */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Styled from './Styled-Card';

export default ({dataHeroList, handleHeroClick, handleOpenModal}) => {

  return (
    <Styled.Section>
      <Styled.Row>
        {dataHeroList.map((getLisHero) => {
          return(
            <Styled.metaHumanoRow key={getLisHero.id} >
              <div className="geral-moviesInitial" onClick={() => handleHeroClick(getLisHero) & handleOpenModal()}>
                <Styled.ContainerImg  >
                <img  src={getLisHero.images.sm} alt={`Imagem do Meta Humano ${getLisHero.name}`} />
                <Styled.H3 key={getLisHero.id}>{ getLisHero.name }</Styled.H3>
                </Styled.ContainerImg>
              </div>
            </Styled.metaHumanoRow>
        )})}
      </Styled.Row>
    </Styled.Section>
  );
}