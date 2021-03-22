import Base from "Components/Base";
import React from "react";
import {
  Container,
  Section,
  Title,
  ImageContainer,
  Image,
  SeriesContainer,
  SeriesButtonContainer,
  SeriesButton,
  SeriesText,
} from "../Home/style";

const Series: React.FunctionComponent = () => (
  <Container>
    <Section>
      <Title bgUrl={require("assets/texture.jpg").default} isHeader={true}>
        니꼬시리즈 소개
      </Title>
    </Section>
    <SeriesContainer>
      <Section>
        <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
          #니꼬튜브(NicoTube)
        </Title>
        <ImageContainer>
          <Image src={require("assets/nicotube.png").default} />
          <SeriesButtonContainer
            href="https://stormy-hollows-56478.herokuapp.com/"
            target="_blank"
          >
            <SeriesButton>NicoTube</SeriesButton>
          </SeriesButtonContainer>
        </ImageContainer>
        <SeriesText>- Youtube Clone 6기 졸업작품</SeriesText>
        <SeriesText>
          - 🏆 2020 노마드어워드 대상수상(부상: 에어팟프로)
        </SeriesText>
        <SeriesText>- 동영상 등록시 썸네일 등록 추가 </SeriesText>
        <SeriesText>- 로그인 사용자만 댓글작성 추가 </SeriesText>
        <SeriesText>- 화면이동 없이 댓글 작성&삭제 추가</SeriesText>
        <SeriesText>- 동영상 본문에 링크 작동</SeriesText>
        <SeriesText>- 프로필 내 등록한 영상목록 추가</SeriesText>
        <SeriesText>- 라우터 프로텍팅 적용</SeriesText>
        <SeriesText>- Flash Message 적용</SeriesText>
      </Section>

      <Section>
        <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
          #니꼬플릭스(NICOFLIC)
        </Title>
        <ImageContainer>
          <Image src={require("assets/nicoflix.png").default} />
          <SeriesButtonContainer
            href="https://nicoflix.netlify.app/"
            target="_blank"
          >
            <SeriesButton>NICOFLIX</SeriesButton>
          </SeriesButtonContainer>
        </ImageContainer>
        <SeriesText>- React JS 8기 졸업작품</SeriesText>
        <SeriesText>- 1320px 표준 그리드 디자인 적용</SeriesText>
        <SeriesText>- 모든 해상도에 대응 가능한 반응형 레이아웃</SeriesText>
        <SeriesText>- 100% Typescript</SeriesText>
        <SeriesText>- React Hooks / Custom Hooks</SeriesText>
        <SeriesText>- Infinite Scrolling</SeriesText>
        <SeriesText>- Web Metadata 추가</SeriesText>
        <SeriesText>- Youtube iFrame API 적용</SeriesText>
        <SeriesText>- Cast, Crew, Company, Review 추가</SeriesText>
        <SeriesText>- People, People Detail 추가</SeriesText>
        <SeriesText>- Similar Movies 추가</SeriesText>
      </Section>
    </SeriesContainer>
  </Container>
);

export default Series;
