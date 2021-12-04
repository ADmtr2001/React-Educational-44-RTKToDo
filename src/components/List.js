import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ListItem from "./ListItem";

const List = () => {
  const list = useSelector((state) => state.list.list);

  return (
    <Container>
      {list.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </Container>
  );
};

export default List;

const Container = styled.div`
  background: #a9d066;
  width: 80%;
  height: 400px;
  display: flex;
  overflow: auto;
  flex-direction: column;
  margin-top: 5px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
`;
