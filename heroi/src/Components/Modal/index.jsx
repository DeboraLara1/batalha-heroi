/* eslint-disable import/no-anonymous-default-export */

import React from "react";
import Modal from 'react-modal'
import Styled from './Styled-Modal'

Modal.setAppElement('#root')
export default ({batalha, modalIsOpen, handleOpenModal, handleCloseModal, winner}) =>{
console.log('winner', winner)
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          background: '#000000ba',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    return(
        <div>
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={handleOpenModal}
            onRequestClose={handleCloseModal}
            style={customStyles}
            contentLabel="Example Modal">
                    
            <Styled.H2>Vencedor {winner}</Styled.H2>
            <Styled.WrapperHerois >
                    {batalha.map((getLisHero) => {
                        return(<>
                            <Styled.Batalha>
                                <img  src={getLisHero.images.sm} alt={`Imagem do Meta Humano ${getLisHero.name}`} />
                                <Styled.Comparação>
                                    <Styled.P> {getLisHero.powerstats.intelligence} Intelligence</Styled.P>
                                    <Styled.P> {getLisHero.powerstats.strength} Strength</Styled.P>
                                    <Styled.P> {getLisHero.powerstats.speed} Speed</Styled.P>
                                    <Styled.P> {getLisHero.powerstats.durability} Durability</Styled.P>
                                    <Styled.P> {getLisHero.powerstats.power} Power</Styled.P>
                                    <Styled.P> {getLisHero.powerstats.combat} Combat</Styled.P>
                                </Styled.Comparação>
                            </Styled.Batalha>
                            </>
                        )})}
                
                </Styled.WrapperHerois>
            </Modal>
        </div>
    )
}