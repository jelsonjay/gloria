import styled from 'styled-components'
//import {Link } from 'next/link'
//import {Link as LinkS} from 'next/link'

export const Nav = styled.nav`
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

export const NavContainer = styled.div`
display:flex;
justify-content:space-between;
height: 80px;
z-index: 1;
width:100%;
padding: 0 24px;
max-width: 1100px;
`

