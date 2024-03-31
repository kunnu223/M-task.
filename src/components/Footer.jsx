import * as React from "react";
import styled from "styled-components";

const footerData = [
  {
    title: "About Us",
    links: [
      "Support Center",
      "Customer Support",
      "About Us",
      "Copyright",
      "Popular Campaign",
    ],
  },
  {
    title: "Our Information",
    links: [
      "Return Policy",
      "Privacy Policy",
      "Terms & Conditions",
      "Site Map",
      "Store Hours",
    ],
  },
  {
    title: "My Account",
    links: [
      "Press inquiries",
      "Social media",
      "directories",
      "Images & B-roll",
      "Permissions",
    ],
  },
  {
    title: "Policy",
    links: [
      "Application security",
      "Software principles",
      "Unwanted software policy",
      "Responsible supply chain",
    ],
  },
];

function Footer() {
  return (
    <>
      <FooterImage
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/34abd2ee78cbee60b0e77eee64a8c62395af4601dce9acbb58e5944941a56cd9?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&"
        alt="Footer background"
      />
      <FooterWrapper>
        <FooterContent>
          <FooterColumns>
            {footerData.map((column, index) => (
              <FooterColumn key={index}>
                <FooterColumnContent>
                  <FooterColumnTitle>{column.title}</FooterColumnTitle>
                  <FooterColumnLinks>
                    {column.links.map((link, linkIndex) => (
                      <FooterLink key={linkIndex}>{link}</FooterLink>
                    ))}
                  </FooterColumnLinks>
                </FooterColumnContent>
              </FooterColumn>
            ))}
          </FooterColumns>
        </FooterContent>
      </FooterWrapper>
    </>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  max-width: 70%;

  margin: 5vh 0vh 5vh 35vh;
`;

const FooterImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FooterContent = styled.div`
  width: 100%;
  margin-top: 67px;
  padding: 0 20px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FooterColumns = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

const FooterColumn = styled.div`
  flex: 1;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const FooterColumnContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FooterColumnTitle = styled.h3`
  color: #0f2137;
  font: 500 18px/1.67 "DM Sans", sans-serif;
  letter-spacing: -0.5px;
`;

const FooterColumnLinks = styled.div`
  margin-top: 45px;
  color: #02073e;
  font: 400 14px/35px "DM Sans", sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FooterLink = styled.div``;

export default Footer;
