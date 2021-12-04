import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeItemAction } from "../store/actions/listActions";

const ListItem = (props) => {
  const dispatch = useDispatch();
  const removeItem = (id) => {
    dispatch(removeItemAction(id));
  };

  return (
    <Container onClick={() => removeItem(props.id)}>{props.text}</Container>
  );
};

export default ListItem;

const Container = styled.div`
  color: palevioletred;
  background: papayawhip;
  font-size: 1.5rem;
  width: 100%;
  height: 60px;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
`;
