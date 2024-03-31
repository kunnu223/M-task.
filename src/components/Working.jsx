import * as React from "react";
import styled from "styled-components";

const data = [
  {
    title: "Set disbursement Instructions",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    title: "Assembly retrieves funds from your account",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    title: "Assembly initiates disbursement",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    title: "Customer receives funds payment",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
];

function Working() {
  return (
    <FunctionSection>
      <FunctionContainer>
        <FunctionHeading>Whats the function</FunctionHeading>
        <FunctionSubheading>Lets see how it works</FunctionSubheading>
        <FunctionVisual>
          <img
            className="function-icon"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5cce913da3ce5817105f69dc4199f4ef46005272b33158246148d03d49a4038?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&"
            alt="Function icon"
          />
          <img
            className="function-diagram"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f95e8dad10742b036884d27e20bd18c3611d47667fc98e5e775b8c696d7587e6?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&"
            alt="Function diagram"
          />
          <img
            className="function-icon"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a3af7cac1dc3cefdabbed9fdfa780916de2d09c1d09bf6ed46bf27942f935ca?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&"
            alt="Function icon"
          />
        </FunctionVisual>
        <FunctionSteps>
          {data.map((item, index) => (
            <FunctionStep key={index}>
              <FunctionStepContent>
                <FunctionStepTitle>{item.title}</FunctionStepTitle>
                <FunctionStepDescription>
                  {item.description}
                </FunctionStepDescription>
              </FunctionStepContent>
            </FunctionStep>
          ))}
        </FunctionSteps>
      </FunctionContainer>
    </FunctionSection>
  );
}

const FunctionSection = styled.section`
  background: linear-gradient(180deg, #ebf9ff 0%, #f6f6ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const FunctionContainer = styled.div`
  display: flex;
  width: 1198px;
  max-width: 100%;
  flex-direction: column;
`;

const FunctionHeading = styled.h3`
  color: #ef9e48;
  text-align: center;
  letter-spacing: 2.1px;
  text-transform: uppercase;
  align-self: center;
  font: 700 14px DM Sans, sans-serif;
`;

const FunctionSubheading = styled.h2`
  color: #0f2137;
  text-align: center;
  letter-spacing: -1.5px;
  align-self: center;
  margin-top: 23px;
  font: 700 36px/153% DM Sans, sans-serif;
`;

const FunctionVisual = styled.div`
  display: flex;
  margin-top: 140px;
  align-items: start;
  gap: 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding-right: 20px;
    margin-top: 40px;
  }
  .function-icon {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 72px;
  }
  .function-diagram {
    aspect-ratio: 11.11;
    object-fit: auto;
    object-position: center;
    width: 852px;
    align-self: stretch;
    @media (max-width: 991px) {
      max-width: 100%;
    }
  }
`;

const FunctionSteps = styled.div`
  margin-top: 32px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const FunctionStep = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const FunctionStepContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FunctionStepTitle = styled.h4`
  color: #0f2137;
  font: 500 22px/34px DM Sans, sans-serif;
`;

const FunctionStepDescription = styled.p`
  color: #343d48;
  margin-top: 31px;
  font: 400 15px/26px DM Sans, sans-serif;
`;

export default Working;
