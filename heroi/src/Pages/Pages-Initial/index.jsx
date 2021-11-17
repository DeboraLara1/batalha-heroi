/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Styled from './Styled.jsx'

export default ()=>{

    return(
        
        <Styled.Contaneir>
            <Styled.Header>
            <Styled.Search  type="shearch" placeholder="Busca" />
            </Styled.Header>
            <Styled.Main>Main</Styled.Main>
            <Styled.Footer>Footer</Styled.Footer>
        </Styled.Contaneir>
        
    )

}
