/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Styled from './Styled.jsx'

import Card from '../../Components/Card'

export default () => {

   
    return(
        
        <Styled.Contaneir>
            <Styled.Header>
            <Styled.Search  type="shearch" placeholder="Busca" />
            </Styled.Header>
            <Styled.Main>
                <Card />
            </Styled.Main>
            
        </Styled.Contaneir>
        
    )

}
