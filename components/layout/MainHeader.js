import Link from "next/link";
import React from "react";
import styled from "styled-components";
import breakpoints from "../../breakpoints";

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 10%;
  height: 5rem;
  background-color: #202020;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-family: "Fira", sans-serif;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #94fdfd;
  transition: 1s;
  a {
    text-decoration: none;
    color: #94fdfd;
  }

  &:hover {
    transform: scale(1.1);
  }
  @media only screen and ${breakpoints.device.sm} {
    font-size: 2.5rem;
  }
`;

const Navigation = styled.nav`
  a {
    text-decoration: none;
    color: #74dacc;
    font-size: 1rem;
  }
  @media only screen and ${breakpoints.device.sm} {
    font-size: 1.5rem;
  }
`;
const MainHeader = () => {
  return (
    <Header>
      <Logo>
        <Link href="/">NextJs Events</Link>
      </Logo>
      <Navigation>
        <ul>
          <li>
            <Link href="/events">Browse Events</Link>
          </li>
        </ul>
      </Navigation>
    </Header>
  );
};

export default MainHeader;
