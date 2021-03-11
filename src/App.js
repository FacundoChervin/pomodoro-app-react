import "./App.css";
import Container from "./components/Container";
import styled from "styled-components";

const BoldSubtitle = styled.span`
  font-weight: bold;
`;

const AppContainer = styled.div`
  background-color: #173753;
  heigth: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
`;

const Title = styled.h1`
  color: white;
  margin: 6vh;
`;
const Subtitle = styled.h2`
  color: white;
  font-style: italic;
  font-weight: 200;
  margin: 4vh;
`;
function App() {
  return (
    <AppContainer className="App">
      <Title>¡Welcome to the Pomodoro App!</Title>
      <Subtitle>
        Manage your time and <BoldSubtitle>get things done</BoldSubtitle> without burning yourself out.
      </Subtitle>
      <Container />
    </AppContainer>
  );
}

export default App;
