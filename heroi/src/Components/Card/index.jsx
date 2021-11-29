/* eslint-disable react/jsx-pascal-case */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Styled from './Styled-Card';

export default ({dataHeroList, handleHeroClick, handleOpenModal}) => {

  return (
    <Styled.Section>
      <Styled.Row>
        {dataHeroList.map((getListHero) => {
          return(
            <Styled.metaHumanoRow key={getListHero.id} >
              <div className="geral-moviesInitial" onClick={() => handleHeroClick(getListHero) & handleOpenModal()}>
                <Styled.ContainerImg  >
                <img  src={getListHero.images.sm} alt={`Imagem do Meta Humano ${getListHero.name}`} />
                <Styled.H3 key={getListHero.id}>{ getListHero.name }</Styled.H3>
                </Styled.ContainerImg>
              </div>
            </Styled.metaHumanoRow>
        )})}
      </Styled.Row>
    </Styled.Section>
  );
}