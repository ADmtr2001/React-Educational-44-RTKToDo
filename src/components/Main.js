import React from "react";
import styled from "styled-components";
import Buttons from "./Buttons";
import Form from "./Form";
import List from "./List";

const Main = () => {
  return (
    <Container>
      <Form />
      <Buttons />
      <List />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  background: #8eb54b;
  border: 2px solid black;
  width: 100%;
  height: 600px;
  margin-top: 5vh;
  border-radius: 15px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
`;
