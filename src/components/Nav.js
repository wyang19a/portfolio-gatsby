import { Link, withPrefix } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const NavStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Megrim&family=Plaster&display=swap');
  --padtop: 5rem;
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, auto);
    position: fixed;
    top: 0;
    text-align: center;
    list-style: none;
    height: 4rem;
    width: 100%;
    background-color: #fff;
    align-items: center;
    justify-content: space-around;
    z-index: 100;
    /* position: fixed; */
    /* border-right: 3px solid var(--bordercolor); */
    /* border: 1px solid white; */
  }
  .nav-item {
    display: grid;
    grid-template-columns: repeat(4, 100px);
  }
  li {
    display: grid;
    order: 1;
  }
  a {
    font-size: 1rem;
    color: black;
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
    font-family: 'Plaster', cursive;
    font-size: 40px;
    /* font-family: 'Megrim', cursive;
    font-size: 80px;
    font-weight: bolder; */
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
          <div>
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
              W
            </AniLink>
          </li>
          </div>
          <div className="nav-item">
          <li>
            <AniLink
              swipe
              to="/"
              direction={`${
                location.pathname === withPrefix('/about')
                  ? 'right' : 'left'
              }`}
              entryOffset={AniLinkConfigs.entryOffset}
              duration={AniLinkConfigs.duration}
            >
              Home
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
          </div>
        </ul>
      </div>
    </NavStyle>
  );
}
