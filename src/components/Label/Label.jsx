import React from "react";
import { Container, Title } from "./LabelStyle";

const Label = ({ name, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Title>{name}</Title>
    </Container>
  );
};

export default Label;
