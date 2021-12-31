import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const HeaderComp = () => {
    return (
        <Container>
            <Content>

                <Logo>Logo</Logo>
                <Link href="/"><a>
						{" "}
						<h4>Home</h4>
					</a>
                </Link>
                <Link href="/about">
                    <a>
						{" "}
						<h4>About</h4>
					</a>
                    
                </Link>
                <Link href="/contact">
                    <a>
						<h4>services</h4>
					</a>
                </Link>
            </Content>
           

        </Container>
    )
}

export default HeaderComp

const Container = styled.div`
display: flex;
justify-content: center;
height: 70px;
width: 100vw;
background-color: #123456;
color: white;
`
const Content = styled.div`
display: flex;
height: 70px;
width: 90vw;
background-color: #123456;
color: white;
align-items: center;
justify-content: space-between;
`
const Logo = styled.div``