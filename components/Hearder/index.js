import React from 'react'
import styled from 'styled-components'
//import {Nav , NavContainer, NavLogo} from '../Hearder/NavElement' 
import {Link } from 'next/link'

const Nav = styled.nav`
height: 80px;
background: #000;
font-size: 1rem;
margin-top: -80px;
display:flex;
justify-content:center;
align-items:center;
position:sticky;
top:0;
z-index: 10;

@media screen and (max-width: 960px){
transition: 0.8s all ease;
}
`;

const Hearder = () => {
  return (
  <>
  <Nav>
  <div>
  <Link href='/'>
  <a>Logo</a>
  </Link>
  </div>
  <div>
  <Link href='/'>
  <a>Home</a>
  </Link>
  </div>
  </Nav>
  </>
  )
}

export default Hearder
