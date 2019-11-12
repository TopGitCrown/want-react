import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Header() {

    return (
        <Wrapper>

            <Logo>
                Want-React
            </Logo>

            <ClearDiv />

            <ListeItem>
                <StyledLink to="/" >Home</StyledLink>
            </ListeItem>
            <ListeItem>
                <StyledLink to="/about">About</StyledLink>
            </ListeItem>
            <ListeItem>
                <StyledLink to="/contact">Contact</StyledLink>
            </ListeItem>
        </Wrapper>
    );
}

const Wrapper = styled.ul`
    list-style: none;
    color: black;
    display: flex;
    position: relative;
    height: 55px;
    margin: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 0.125rem;
    background-color: #fff;
`

const ListeItem = styled.li`
    line-height: 2.5;    
`

const StyledLink = styled(Link)`
    line-height: 2.5;
    font-size: 20px;
    font-family: cursive;
    text-decoration: unset;
    color: black;
    padding: 17px;
`

const Logo = styled.h1`
    color: green;
    font-size: 30px;
    font-family: initial;
`

const ClearDiv = styled.div`
    width: 55%;
    position: relative;
`