import * as React from "react";
import styled from "styled-components";

const data = [
  {
    value: "150+",
    description: "Free online tutorials videos avaialble",
  },
  {
    value: "80K+",
    description: "We have more than students",
  },
  {
    value: "& 3M",
    description: "Job posted everydays with qualification",
  },
  {
    value: "90+",
    description: "Daily updated blog post maintain",
  },
];

function MyComponent() {
  return (
    <Container>
      <Containerf>
        <StatisticItem>
          <StatisticValue>{data[0].value}</StatisticValue>
          <StatisticDescription>{data[0].description}</StatisticDescription>
        </StatisticItem>
        <StatisticItem>
          <StatisticValue>{data[1].value}</StatisticValue>
          <StatisticDescription>{data[1].description}</StatisticDescription>
        </StatisticItem>
        <StatisticItem>
          <StatisticValue>{data[2].value}</StatisticValue>
          <StatisticDescription>{data[2].description}</StatisticDescription>
        </StatisticItem>
        <StatisticItem>
          <StatisticValue>{data[3].value}</StatisticValue>
          <StatisticDescription>{data[3].description}</StatisticDescription>
        </StatisticItem>
      </Containerf>
      <FeatureSection>
        <FeatureLabel>Core features</FeatureLabel>
        <FeatureTitle>
          Smart Jackpots that you may love this anytime & anywhere
        </FeatureTitle>
        <FeatureDescription>
          Get your tests delivered at let home collect sample from the victory
          of the managments that supplies best design system guidelines ever.
          Get your tests delivered at let home collect sample.
        </FeatureDescription>
        <ExploreButton>Explore details</ExploreButton>
      </FeatureSection>
    </Container>
  );
}

const Container = styled.div`
  /* features */
  display: flex;
  padding: 10vh;
`;
const Containerf = styled.div`
  display: flex;
  gap: 30vh;
  flex-wrap: wrap;
`;

const StatisticItem = styled.div`
  background: antiquewhite;
  padding-top: 5vh;

  display: flex;
  width: 23%;
  max-width: 100%;
  flex-direction: column;
  text-align: center;

  &:hover {
    transform: scale(1.04);
    transition-duration: 300ms;
  }
`;

const StatisticValue = styled.span`
  color: #ff753a;
  letter-spacing: -4.5px;
  font: 700 72px/76% DM Sans, sans-serif;
`;

const StatisticDescription = styled.div`
  color: #0f2137;
  letter-spacing: -0.5px;
  margin-top: 28px;
  font: 400 18px/25px DM Sans, sans-serif;
`;

const FeatureSection = styled.div`
  align-self: end;
  display: flex;

  width: 60%;
  max-width: 100%;
  flex-direction: column;
  color: #ef9e48;
  font-weight: 700;
  padding: 0 20px;
`;

const FeatureLabel = styled.div`
  letter-spacing: 2.1px;
  text-transform: uppercase;
  font: 14px/286% DM Sans, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FeatureTitle = styled.h2`
  color: #0f2137;
  letter-spacing: -1.5px;
  margin-top: 32px;
  font: 48px/55px DM Sans, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    line-height: 51px;
  }
`;

const FeatureDescription = styled.p`
  color: #02073e;
  margin-top: 42px;
  font: 400 18px/42px DM Sans, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ExploreButton = styled.button`
  border-radius: 5px;
  background-color: #fcf2e8;
  align-self: start;
  margin-top: 39px;
  letter-spacing: -0.16px;
  justify-content: center;
  padding: 17px 19px;
  font: 16px/150% DM Sans, sans-serif;
  &:hover {
    transform: scale(1.04);
    transition-duration: 300ms;
  }
`;

export default MyComponent;
