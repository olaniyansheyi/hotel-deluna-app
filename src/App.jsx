import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading type="h1">Hello World</Heading>

        <Heading type="h2">Check in and out</Heading>
        <Button>Check in</Button>
        <Input
          type="Number"
          placeholder="
      number of guests"
        ></Input>
      </StyledApp>
    </>
  );
}

export default App;
