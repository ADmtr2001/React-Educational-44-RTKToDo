import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Main from "./components/Main";
import Start from "./components/Start";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='main' element={<Main />} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 10px;
`;
