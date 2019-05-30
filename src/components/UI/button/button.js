import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  background: var(--primary);
  color: var(--white);
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 700;
  border: 1px transparent;
  border-radius: 10rem;
  font-size: 1.1rem;
  letter-spacing: 1.5px;
  padding: 1.5rem 4rem;
  margin: 0rem;
  cursor: pointer;
  box-shadow: 0px 8px 15px var(--shadow-color);
  transition: all 0.2s ease-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 15px 20px var(--shadow-btn);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 10px var(--shadow-btn);
  }
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
