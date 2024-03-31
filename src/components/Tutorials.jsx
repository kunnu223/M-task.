import { useState } from "react";
import styled from "styled-components";

const tutorialData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e8c7355420290da19cd05b5d6a203d25661db88e892519deb1d932b796610ba2?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
    rating: "5.0",
    reviewCount: "392",
    title: "How to work with prototype design with adobe xd featuring tools",
    studentCount: "2,538",
    studentImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5be661732fd1d44b292ccadf1b51242416510ce24f880159bddfceb67a0a0d72?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b4d1b270f557f3611c8a9761764f13fbf91374d46e21d8f63ede830d9250fcdb?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
    rating: "4.5",
    reviewCount: "524",
    title:
      "Create multiple artboard by using figma prototyping tools development",
    studentCount: "3,532",
    studentImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/33ef769ca682eac24d9d7006b110da2a891ed261eee7106a02d29c51e035c1b5?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4823f6d0c2debc88f497260d6dd7f467552f09bde654c07a84279ea3404b091c?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
    rating: "5.0",
    reviewCount: "392",
    title:
      "Convert your web layout theming easily with sketch zeplin extension",
    studentCount: "1,037",
    studentImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2efcfd906c216d6534bacc8a4aba400d792d94e65699702be5df7b3cd00acdbc?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e8c7355420290da19cd05b5d6a203d25661db88e892519deb1d932b796610ba2?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
    rating: "5.0",
    reviewCount: "392",
    title: "How to work with prototype design with adobe xd featuring tools",
    studentCount: "2,538",
    studentImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5be661732fd1d44b292ccadf1b51242416510ce24f880159bddfceb67a0a0d72?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
  },
];

function QualityFeatures() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === tutorialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tutorialData.length - 1 : prevIndex - 1
    );
  };
  return (
    <QualityFeaturesWrapper>
      <SectionSubtitle>Quality features</SectionSubtitle>
      <SectionTitle>Tutorials that people love most</SectionTitle>

      <TutorialsContainer>
        {tutorialData.map((tutorial, index) => (
          <TutorialCard
            key={index}
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% - ${
                currentIndex * 36
              }px))`,
            }}
          >
            <TutorialImage
              src={tutorial.imageSrc}
              alt={tutorial.title}
              loading="lazy"
            />
            <TutorialDetails>
              <RatingContainer>
                <StarRating>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                </StarRating>
                <RatingText>
                  {tutorial.rating} ({tutorial.reviewCount} reviews)
                </RatingText>
              </RatingContainer>
              <TutorialTitle>{tutorial.title}</TutorialTitle>
              <StudentCountContainer>
                <StudentImage
                  src={tutorial.studentImageSrc}
                  alt=""
                  loading="lazy"
                />
                <StudentCount>
                  {tutorial.studentCount} students watched
                </StudentCount>
              </StudentCountContainer>
            </TutorialDetails>
          </TutorialCard>
        ))}
      </TutorialsContainer>
      <PrevButton onClick={prevSlide} src="../left.png" />
      <NextButton onClick={nextSlide} src="../right.png" />
    </QualityFeaturesWrapper>
  );
}

const PrevButton = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;

  &:hover {
    transform: scale(1.4);
    transition-duration: 300ms;
  }
`;

const NextButton = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;

  &:hover {
    transform: scale(1.4);
    transition-duration: 300ms;
  }
`;

const QualityFeaturesWrapper = styled.section`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  position: relative;
`;

const SectionSubtitle = styled.h3`
  color: #ef9e48;
  text-align: center;
  letter-spacing: 2.1px;
  text-transform: uppercase;
  font: 700 14px/286% DM Sans, sans-serif;
`;

const SectionTitle = styled.h2`
  color: #0f2137;
  text-align: center;
  letter-spacing: -1.5px;
  margin-top: 22px;
  font: 700 36px/153% DM Sans, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const TutorialsContainer = styled.div`
  display: flex;
  gap: 36px;
  margin-top: 67px;
  width: 80%;
  overflow-x: hidden;
  scroll-behavior: smooth;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
    margin-top: 40px;
  }
`;

const TutorialCard = styled.article`
  border-radius: 10px;
  border: 1px solid rgba(243, 244, 245, 1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding-bottom: 33px;
  width: 50%;
  flex: 0 0 auto;
  margin-right: 20px;
  transition: transform 0.5s ease;
`;

const TutorialImage = styled.img`
  aspect-ratio: 1.72;
  object-fit: cover;
  width: 100%;
`;

const TutorialDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 23px;
  padding: 0 33px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 10px;
  line-height: 200%;
`;

const StarRating = styled.div`
  color: #ffce1f;
  letter-spacing: 4.8px;
  font: 16px Font Awesome 5 Free, sans-serif;
`;

const RatingText = styled.div`
  color: #0f2137;
  font: 15px Heebo, sans-serif;
`;

const TutorialTitle = styled.h3`
  color: #0f2137;
  margin-top: 22px;
  font: 700 20px DM Sans, sans-serif;
`;

const StudentCountContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  font-size: 16px;
  color: #343d48;
  line-height: 162.5%;
`;

const StudentImage = styled.img`
  width: 20px;
  aspect-ratio: 1;
`;

const StudentCount = styled.div`
  font-family: DM Sans, sans-serif;
  margin: auto 0;
`;

export default QualityFeatures;
