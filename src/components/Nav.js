import { Link, withPrefix } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const NavStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Megrim&family=Plaster&display=swap');
  --padtop: 5rem;
  ul {
    border-right: 3px solid var(--bordercolor);
    margin: 0;
    padding: 0;
    padding-top: var(--padtop);
    text-align: center;
    list-style: none;
    height: calc(100vh - var(--padtop));
    background-color: var(--darkblue);
    display: grid;
    grid-template-rows: repeat(5, 100px);

    align-items: center;

    justify-content: center;
  }
  li {
    display: grid;
    order: 1;
  }
  a {
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
    /* display: block; */
    /* &:hover {
      color: red;
    } */
    /* @media (max-width: 800px) {
      font-size: 2rem;
    } */
    &[aria-current='page'] {
      color: red;
    }
  }
  .logo {
    /* font-family: 'Plaster', cursive;
    font-size: 65px;
    color: #1964bd; */
    font-family: 'Megrim', cursive;
    font-size: 80px;
    font-weight: bolder;
    color: #1964bd;
    /* text-shadow: 0px 1px, 1px 0px, 1px 1px; */
    &[aria-current='page'] {
      color: #1964bd;
    }
  }
`;
const AniLinkConfigs = {
  entryOffset: 100,
  duration: '0.3',
};

export default function Nav({ location }) {
  return (
    <NavStyle>
      <div>
        <ul>
          <li>
            <AniLink
              swipe
              to="/"
              direction={`${
                location.pathname === withPrefix('/about') ||
                location.pathname === withPrefix('/portfolio') ||
                location.pathname === withPrefix('/contact')
                  ? 'right'
                  : 'left'
              }`}
              className="logo"
              entryOffset={AniLinkConfigs.entryOffset}
              duration={AniLinkConfigs.duration}
            >
              WY
            </AniLink>
          </li>
          <li>
            <AniLink
              swipe
              to="/about"
              direction={`${
                location.pathname === withPrefix('/portfolio') ||
                location.pathname === withPrefix('/contact')
                  ? 'right'
                  : 'left'
              }`}
              entryOffset={AniLinkConfigs.entryOffset}
              duration={AniLinkConfigs.duration}
            >
              About
            </AniLink>
          </li>
          <li>
            <AniLink
              swipe
              to="/portfolio"
              direction={`${
                location.pathname === withPrefix('/contact') ? 'right' : 'left'
              }`}
              entryOffset={AniLinkConfigs.entryOffset}
              duration={AniLinkConfigs.duration}
            >
              Portfolio
            </AniLink>
          </li>
          <li>
            <AniLink
              swipe
              to="/contact"
              entryOffset={AniLinkConfigs.entryOffset}
              duration={AniLinkConfigs.duration}
              direction="left"
            >
              Contact
            </AniLink>
          </li>
        </ul>
      </div>
    </NavStyle>
  );
}
