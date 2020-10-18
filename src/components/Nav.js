import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const NavStyle = styled.div`
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;

    display: grid;
    grid-template-rows: repeat(5, 100px);
    /* grid-gap: 2rem; this is equal to 20px because parent element html has font-size: 10px; */
    align-items: center;

    justify-content: center;
  }
  li {
    display: grid;
    order: 1;
  }

  a {
    font-size: 1rem;
    text-decoration: none;
    /* display: block; */
    /* &:hover {
      color: red;
    } */
    @media (max-width: 800px) {
      font-size: 2rem;
    }
    /* &[aria-current='page'] {
      color: var(--red);
    } */
  }
`;

export default function Nav() {
  return (
    <NavStyle>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          {/* <p>hi</p> */}
          <Link to="#">Pizza Menu</Link>
        </li>
        <li>
          {/* <p>hi</p> */}
          <Link to="#">SliceMasters</Link>
        </li>
        <li>
          {/* <p>hi</p> */}
          <Link to="#">Order Ahead!</Link>
        </li>
      </ul>
    </NavStyle>
  );
}
