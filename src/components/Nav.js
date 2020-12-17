import { Link, withPrefix } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
// import AniLink from 'gatsby-plugin-transition-link/AniLink';
import scrollTo from 'gatsby-plugin-smoothscroll';

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
    /* width: 50%; */
    justify-content: center;
    align-items: center;
  }
  li {
    display: grid;
    order: 1;
    width: 70%;
    /* text-align: center; */
  }
  .logo {
    font-family: 'Plaster', cursive;
    font-size: 40px;
    color: #1964bd;
  }
  button {
    border: none;
    background-color: #fff;
    color: grey;
    cursor: pointer;
    display: inline-block;
    :focus {
      outline: 0;
    }
  }
  .navbtn {
    border-radius: 5px;
    padding: 5px;
    transition: 0.5s;
    :focus {
      outline: 0;
    }
    :hover {
      transform: scale(1.25, 1.25);
    }
  }
  @media (max-width: 564px) {
    button {
      font-size: 0.75rem;
    }
    .nav-item {
      grid-template-columns: repeat(2, 100px);
    }
  }
`;

export default function Nav({ location }) {
  return (
    <NavStyle>
      <div>
        <ul>
          <div>
            <li>
              <button
                type="button"
                className="logo"
                onClick={() => scrollTo('#home')}
              >
                W
              </button>
            </li>
          </div>
          <div className="nav-item">
            <li>
              <button
                type="button"
                className="navbtn"
                onClick={() => scrollTo('#home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                className="navbtn"
                onClick={() => scrollTo('#about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                type="button"
                className="navbtn"
                onClick={() => scrollTo('#portfolio')}
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                type="button"
                className="navbtn"
                onClick={() => scrollTo('#contact')}
              >
                Contact
              </button>
            </li>
          </div>
        </ul>
      </div>
    </NavStyle>
  );
}
