import styled from "styled-components";

function Ready() {
  return (
    <Main>
      <HeroSection>
        <Heading>
          Ready to learn design
          <br />
          with Nia Matos
        </Heading>
        <Button>Start Learning Today</Button>
      </HeroSection>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 0 20px;
  margin-bottom: 5vh;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 474px;
  font-weight: 700;
`;

const Heading = styled.h1`
  color: #02073e;
  text-align: center;
  letter-spacing: -2px;
  width: 100%;
  font: 700 50px/65px "DM Sans", sans-serif;
`;

const Button = styled.button`
  border-radius: 5px;
  background-color: #fcf2e8;
  margin-top: 74px;
  color: #ef9e48;
  letter-spacing: -0.16px;
  padding: 17px 25px;
  font: 700 16px/150% "DM Sans", sans-serif;
  cursor: pointer;
  border: none;
`;

export default Ready;
