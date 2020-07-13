import React, { useState } from "react";
import api from "../../utils/services";
import { Container, Title } from "./CardStyle";

const Card = ({ name, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Title>{name}</Title>
    </Container>
  );
};

export default Card;
