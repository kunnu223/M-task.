import * as React from "react";
import styled from "styled-components";

const frequentQuestions = [
  {
    question: "How to contact with riders emergency?",
    answer:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/932e3be6d449773ac6f01110429ae5054a01f9be3f2b623e0a802f2fd1774025?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
  },
  {
    question: "App installation failed, how to update system information?",
    answer:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3bc46b8f3f23e0e29101098ac84eb3b5fd6fd4107cfff1361c3ba4262fc492fa?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
  },
  {
    question: "Website reponse taking time, how to improve?",
    answer:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/34abd2ee78cbee60b0e77eee64a8c62395af4601dce9acbb58e5944941a56cd9?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
  },
  {
    question: "New update fixed all bug and issues",
    answer:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1fa28c6d08bf170d098c2239f229241fd370ba6aae570a6202e55eea24477848?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
  },
];

function Faq2() {
  const [data, setData] = React.useState(frequentQuestions);
  const [openIndexes, setOpenIndexes] = React.useState([]);

  const toggleIndex = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const isOpen = (index) => openIndexes.includes(index);

  return (
    <Container>
      <Title>Frequent Question</Title>
      <Subtitle>Do you have any question</Subtitle>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <QuestionWrapper>
            <QuestionIcon
              src={isOpen(index) ? "../minus.png" : "../plus.png"}
              alt="Question icon"
              width="20"
              height="20"
              onClick={() => toggleIndex(index)}
            />
            <Question>{item.question}</Question>
          </QuestionWrapper>
          {isOpen(index) && (
            <React.Fragment>
              <Answer>{item.answer}</Answer>
              <AnswerImage src={item.imageSrc} alt="" />
            </React.Fragment>
          )}
        </React.Fragment>
      ))}
    </Container>
  );
}

const Container = styled.div`
  max-width: 70%;
  padding: 0 20px;
  margin-left: 34vh;
  margin-bottom: 20vh;
  margin-top: 5rem;
`;

const Title = styled.h2`
  color: #ef9e48;
  text-align: center;
  letter-spacing: 2.1px;
  text-transform: uppercase;
  font: 700 14px/286% DM Sans, sans-serif;
`;

const Subtitle = styled.h1`
  color: #0f2137;
  text-align: center;
  letter-spacing: -1.5px;
  margin-top: 14px;
  font: 700 36px/153% DM Sans, sans-serif;
`;

const QuestionWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 96px;
  font-size: 18px;
  color: #0f2137;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 167%;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const QuestionIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 21px;
`;

const Question = styled.p`
  font-family: DM Sans, sans-serif;
`;

const AnswerImage = styled.img`
  width: 100%;
  margin-top: 25px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Answer = styled.p`
  color: #343d48;
  margin-top: 28px;
  padding-right: 43px;
  font: 400 16px/32px DM Sans, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

export default Faq2;
