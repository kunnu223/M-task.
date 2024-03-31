import * as React from "react";
import styled from "styled-components";

function Faq() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b4d1b270f557f3611c8a9761764f13fbf91374d46e21d8f63ede830d9250fcdb?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
      title: "Slide 1",
      description: "Description for Slide 1",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4823f6d0c2debc88f497260d6dd7f467552f09bde654c07a84279ea3404b091c?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
      title: "Slide 2",
      description: "Description for Slide 2",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e8c7355420290da19cd05b5d6a203d25661db88e892519deb1d932b796610ba2?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
      title: "Slide 2",
      description: "Description for Slide 2",
    },
    // Add more slide objects as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <FreeTrialSectionWrapper>
      <FreeTrialLabel>Free tutorial</FreeTrialLabel>
      <FreeTrialContent>
        <FreeTrialImageWrapper>
          {slides.map((slide, index) => (
            <FreeTrialImage
              key={index}
              src={slide.imageUrl}
              alt={slide.title}
              style={{ display: index === currentSlide ? "block" : "none" }}
            />
          ))}
          <ButtonWrapper>
            <ButtonLeft onClick={prevSlide} src="../left.png" />
            <ButtonRight onClick={nextSlide} src="../right.png" />
          </ButtonWrapper>
        </FreeTrialImageWrapper>
        <FreeTrialDetails>
          <FreeTrialTitle>
            More than thousand <br /> of free tutorial upload <br /> every weeks
          </FreeTrialTitle>
          <FreeTrialDescription>
            Get your tests delivered at let home collect sample from the victory
            of the managements that supplies best design system guidelines ever.
            Get your tests delivered at let home collect sample.
          </FreeTrialDescription>
          <ExploreButton>Explore details</ExploreButton>
        </FreeTrialDetails>
      </FreeTrialContent>
    </FreeTrialSectionWrapper>
  );
}

const FreeTrialSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const FreeTrialLabel = styled.h3`
  color: #ef9e48;
  letter-spacing: 2.1px;
  text-transform: uppercase;
  align-self: end;

  font: 700 14px/286% DM Sans, sans-serif;
  margin-top: 10vh;

  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

const FreeTrialContent = styled.div`
  margin-top: 7px;
  width: 100%;
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const FreeTrialImageWrapper = styled.div`
  position: relative;
  width: 67%;
  margin-left: 0;
  overflow: hidden; /* Ensure only one slide is visible at a time */
`;

const FreeTrialImage = styled.img`
  aspect-ratio: 1.89;
  object-fit: cover;
  object-position: center;
  margin-left: 12vh;
  margin-top: 80px;
  width: 80%;
  position: absolute;
  top: 0;
  left: 0;

  &:hover {
    transform: scale(1.02);
    transition-duration: 300ms;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  display: flex;
  margin-bottom: 100px;
  justify-content: space-between;
`;

const ButtonLeft = styled.img`
  /* Add your button styles here */
  &:hover {
    transform: scale(1.4);
    transition-duration: 300ms;
  }
`;

const ButtonRight = styled.img`
  /* Add your button styles here */
  &:hover {
    transform: scale(1.4);
    transition-duration: 300ms;
  }
`;

const FreeTrialDetails = styled.div`
  width: 33%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  font-weight: 700;

  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

const FreeTrialTitle = styled.h2`
  color: #0f2137;
  letter-spacing: -1.5px;
  font: 48px/55px DM Sans, sans-serif;

  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 51px;
  }
`;

const FreeTrialDescription = styled.p`
  color: #02073e;
  margin-top: 41px;
  font: 400 18px/42px DM Sans, sans-serif;
`;

const ExploreButton = styled.button`
  border-radius: 5px;
  background-color: #fcf2e8;
  align-self: start;
  margin-top: 39px;
  color: #ef9e48;
  letter-spacing: -0.16px;
  padding: 17px 19px;
  font: 16px/150% DM Sans, sans-serif;
  cursor: pointer;
  border: none;
  &:hover {
    transform: scale(1.04);
    transition-duration: 300ms;
  }
`;

export default Faq;
