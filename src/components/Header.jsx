import * as React from "react";
import styled from "styled-components";

const sponsorLogos = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/03642d8b64abf89bac245585eb2959bfa07320ad306859d9590d3aa943128241?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
    alt: "Sponsor 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/15eaaae3dfd2dbf8d2ac789ee8839c49cb45ba25c0ac83bbdbd330bb99e1104c?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
    alt: "Sponsor 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a86709dc06259430efa10f4e00921ea37db1f1920d9b8162897038fdefe73696?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&",
    alt: "Sponsor 3",
  },
];

function MyHeaderComponent() {
  return (
    <PageWrapper>
      <Header>
        <Logo>
          <LogoIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/297fec19869b25316b4584158f81b93aa24bb30d42d3812d08c434db1fea5450?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&"
            alt="Landguru logo"
          />
          <LogoText>Landguru</LogoText>
        </Logo>
        <Nav>
          <NavLink>Home</NavLink>
          <NavLink>Advertise</NavLink>
          <NavLink>Supports</NavLink>
          <NavLink>Contact</NavLink>
        </Nav>
        <NavButton
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ebfd3d2d0616db746e10cc4648ec27f4757994ee541e9cb1ef296f544a1e618?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&"
          alt="Get started"
        />
      </Header>
      <Main>
        <MainContent>
          <TrustBadge>
            <BadgeIcon></BadgeIcon>
            <BadgeText>Trusted by over 4,332 students</BadgeText>
          </TrustBadge>
          <Heading>
            Learn Design <br /> with Nia Matos
          </Heading>
          <Description>
            Get your blood tests delivered at let home collect sample from the
            victory of the managments that supplies best <br /> design system
            guidelines ever.
          </Description>
          <SearchForm>
            <label htmlFor="courseSearch" className="visually-hidden">
              Search Course Name
            </label>
            <SearchInput
              type="text"
              id="courseSearch"
              placeholder="Search Course Name"
              aria-label="Search Course Name"
            />
            <SearchIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c794e25d1a9debf47d56c959eb0f11c8122de854ff9610b500807d39a793b4d5?apiKey=7aa3a0e9afc74421a150ec72eb09cb85&"
              alt="Search"
            />
          </SearchForm>
          <SponsorSection>
            <SponsorHeading>Sponsored by:</SponsorHeading>
            {sponsorLogos.map((logo, index) => (
              <SponsorLogo key={index} src={logo.src} alt={logo.alt} />
            ))}
          </SponsorSection>
        </MainContent>
        <ImageGrid>
          <PrimaryImage
            src="../sample.mp4"
            controls
            autoPlay
            muted
            loop
            alt="Primary Video"
          />
        </ImageGrid>
      </Main>
    </PageWrapper>
  );
}

export default MyHeaderComponent;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8vh;
  background-color: rgb(226, 255, 245);
  padding: 20px @media (max-width: 991px) {
    padding: 25px 20px 0;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  bac
  max-width: 1400px;
  margin-top: 25px;
  color: #02073e;
  gap: 20px;
  

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  font-size: 20px;
  font-weight: 700;
  line-height: 120%;
  cursor: pointer;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const LogoIcon = styled.img`
  width: 30px;
  height: auto;
`;

const LogoText = styled.span`
  font-family: Poppins, sans-serif;
`;

const Nav = styled.nav`
  display: flex;
  gap: 10vh;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 206%;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const NavLink = styled.a`
  font-family: FontAwesome, sans-serif;
  color: #02073e;
  text-decoration: none;
  cursor: pointer;
`;

const NavButton = styled.img`
  width: 112px;
  height: auto;
  max-width: 100%;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition-duration: 300ms;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin-top: 79px;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    margin-top: 40px;
    gap: 0;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto 0;
  font-weight: 400;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
    background-color: rgb(187, 248, 227);
  }
`;

const TrustBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BadgeIcon = styled.span`
  color: rgba(2, 7, 62, 0.2);
  letter-spacing: 4.8px;
  font: 16px/32px "Font Awesome 5 Free", -apple-system, Roboto, Helvetica,
    sans-serif;
`;

const BadgeText = styled.span`
  color: #02073e;
  font: 15px/200% Heebo, sans-serif;
`;

const Heading = styled.h1`
  color: #02073e;
  letter-spacing: -2px;
  margin-top: 40px;
  font: 610 75px / 100px DM Sans, sans-serif;

  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 52px;
  }
`;

const Description = styled.p`
  color: #02073e;
  margin-top: 64px;
  font: 18px/42px DM Sans, sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  padding: 16px 51px 16px 27px;
  border-radius: 8px;
  box-shadow: 0px 10px 50px 0px rgba(48, 98, 144, 0.08);
  background-color: #fff;
  font-size: 16px;
  color: #02073e;
  line-height: 250%;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
    padding: 0 20px;
    &:hover {
      transform: scale(1.04);
      transition-duration: 300ms;
    }
  }
`;

const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  font-family: DM Sans, sans-serif;
`;

const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition-duration: 300ms;
  }
`;

const SponsorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 35px;
  font-size: 16px;
  color: #02073e;
  line-height: 262.5%;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding-right: 20px;
  }
`;

const SponsorHeading = styled.span`
  font-family: DM Sans, sans-serif;
`;

const SponsorLogo = styled.img`
  width: 10vh;
  height: auto;
  max-width: 100%;
`;

const ImageGrid = styled.div`
  display: flex;
  width: 45%;
  margin-top: 10vh;
  @media (max-width: 991px) {
    width: 100%;
    flex-direction: column;
    margin-left: 0;
    margin-top: 40px;
    gap: 0;
  }
`;

const PrimaryImage = styled.video`
  width: 100%;
  height: 50%;
  margin-top: 24px;
  z-index: 10;

  @media (max-width: 991px) {
    width: 100%;
  }
`;
