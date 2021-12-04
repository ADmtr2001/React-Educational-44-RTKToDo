import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Start = () => {
  return (
    <Container>
      <Link to='main'>
        <Button>Press to start</Button>
      </Link>
    </Container>
  );
};

export default Start;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
`;

const Button = styled.button`
  background: transparent;
  border: 2px solid black;
  font-size: 1.5rem;
  padding: 10px 20px;
  transition: transform 0.5s;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

  :hover {
    background: rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
`;
