import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const MyButton = styled.a`
  text-decoration: none;
  cursor: pointer;
  font: inherit;
  background: #03be9f;
  border: 1px solid #03be9f;
  border-radius: 6px;
  color: white;
  padding: 0.5rem 1.5rem;
  text-align: center;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  &:hover,
  &:visited {
    background: #02afa1;
    border-color: #02afa1;
  }
`;
const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        {/* Link por defecto renderiza un Link pero si lo queremos estilizar, lo tenemos que poner nosotros */}
        <MyButton>{props.children}</MyButton>
      </Link>
    );
  } else {
    return (
      <MyButton as="buton" onClick={props.onClick}>
        {props.children}
      </MyButton>
    );
  }
};

export default Button;
