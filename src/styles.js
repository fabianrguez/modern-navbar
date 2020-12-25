import styled, { css } from 'styled-components';

import { rgba } from 'polished';

const openStyles = css`
  transform: translateX(110px) scale(0.85);
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: inherit;
  background: #825cc5;
`;

export const Phone = styled.div`
  overflow: hidden;
  position: relative;
  width: 240px;
  height: 480px;
  border-radius: 40px;
  background: #5a32a0;
  box-shadow: 0 7px 7px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  height: 800px;
  padding: 2rem 1.5rem;
  border-radius: 40px;
  background: #210f40;
  transform: translateX(0) scale(1);
  transition: 0.45s;
  ${(p) => p.open && openStyles}
`;

export const Burger = styled.button`
  background: transparent;
  border: 0;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  cursor: pointer;
  outline: 0;
`;

export const Nav = styled.nav`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 44px;
  background: transparent;
  color: ${rgba('white', 0.5)};
  outline: none;
  border: none;
  padding: 1.25rem;
  cursor: pointer;
  transition: 0.45s;

  &:hover {
    color: white;
  }
`;

export const NavIcon = styled.span`
  font-size: 1.25rem;
`;

export const NavText = styled.span`
  margin-left: 0.45rem;
  font-size: 0.875rem;
`;

export const Greeting = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 2rem;
`;

export const Hi = styled.h4`
  color: lightgrey;
  font-weight: 200;
  margin: 0.35rem 0;
`;

export const Name = styled.h1`
  font-size: 1.25rem;
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 20px;
  height: 275px;
  width: 100%;
  margin: 1.25rem 0;
`;
