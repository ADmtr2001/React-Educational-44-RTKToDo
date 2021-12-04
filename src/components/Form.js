import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addItemAction } from "../store/actions/listActions";

const Form = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    dispatch(addItemAction({ id: Date.now(), text: inputText }));
    setInputText("");
  };

  return (
    <Container>
      <Input
        type='text'
        placeholder='Task'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button type='submit' onClick={(e) => addItem(e)}>
        Go!
      </Button>
    </Container>
  );
};

export default Form;

const Container = styled.form`
  background: #a9d066;
  border: 2px solid black;
  border-radius: 5px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

const Input = styled.input`
  width: 400px;
  height: 60%;
  font-size: 1.1rem;
  margin: 0 10px;
  padding: 10px;
  background: papayawhip;
  border: 2px solid black;
  border-radius: 5px;
  color: palevioletred;

  ::placeholder {
    color: palevioletred;
  }
`;

const Button = styled.button`
  height: 60%;
  font-size: 1.1rem;
  padding: 0 20px;
  margin: 0 10px;
  background: papayawhip;
  border: 2px solid black;
  border-radius: 5px;
  color: palevioletred;
`;
