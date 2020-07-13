import React from "react";
import { Header, Wrapper } from "./ContainerStyle";
import logo from "../../assets/images/logo.svg";
const Container = ({ children }) => (
  <Wrapper>
    <Header>
      <img src={logo} alt="logo"/>
    </Header>
    {children}
  </Wrapper>
);

export default Container;
