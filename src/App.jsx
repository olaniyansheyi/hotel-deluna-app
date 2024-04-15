import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Hello World</Heading>

            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button>Check in</Button>

              <Button variation="secondary" size="small">
                Check out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading to="h3">Form</Heading>
            <Input
              type="Number"
              placeholder="
      number of guests"
            ></Input>
            <Input
              type="Number"
              placeholder="
      number of guests"
            ></Input>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
