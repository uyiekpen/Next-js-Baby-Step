import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Container>
            copyright@2021
        </Container>
    )
}

export default Footer

const Container = styled.div`
height: 100px;
width: 100vw;
background-color: turquoise;
display: flex;
justify-content: center;
align-items: center;
`