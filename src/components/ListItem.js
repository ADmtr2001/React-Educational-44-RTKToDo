import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeItem } from "../store/reducers/listSlice";

const ListItem = (props) => {
  const dispatch = useDispatch();
  const removeCurrentItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <Container onClick={() => removeCurrentItem(props.id)}>
      {props.text}
    </Container>
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
