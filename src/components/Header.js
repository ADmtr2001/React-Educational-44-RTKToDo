import React from "react";
import styled from "styled-components";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";

const Header = () => {
  return (
    <Container>
      <FormatListNumberedIcon fontSize='large' />
      <span>ToDo</span>
      <FormatListNumberedRtlIcon fontSize='large' />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background: #8eb54b;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  border: 2px solid black;
  border-top: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

  span {
    margin: 0 10px;
  }
`;
