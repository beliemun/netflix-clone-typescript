import Base from "Components/Base";
import React from "react";
import {
  Container,
  Section,
  Title,
  ProfileContainer,
  Poster,
  Message,
  ImageContainer,
  Image,
  AlertText,
} from "../Home/style";

const Introduction: React.FunctionComponent = () => {
  return (
    <Container>
      <Section>
        <Title bgUrl={require("assets/texture.jpg").default} isHeader={true}>
          적용기술 소개
        </Title>
      </Section>
      <Section>
        <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
          #타입스크립트(TypeScript)
        </Title>
        <ImageContainer>
          <Image src={require("assets/about_01.png").default} />
        </ImageContainer>
        <ProfileContainer>
          <Poster src={require("assets/profile.jpg").default} />
          <Message>
            모든 스크립트가 Typescript로 작성되었습니다. 재사용되는
            인터페이스들은 types.d.ts 파일에 정의하여 재사용될 수 있도록
            하였습니다. Typescript로 개발해 본적은 처음이었고, 계념이 전무해서
            막히는 부분이 생각보다 많아서 고생을 했습니다. 타입 정의가
            타입스크립트의 전부라는 말은 새빨간(?) 거짓말이었습니다. 타입
            스크립트를 적용하기 위해서는 니꼬선생님께서 제공하시는 강좌를 비롯해
            인터페이스, 타입, 템플릿의 계념을 더 명확히 학습할 시간이
            필요했습니다.
          </Message>
        </ProfileContainer>
        <Base.GradientLine />
      </Section>
      <Section>
        <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
          #반응형 레이아웃(Response Layout)
        </Title>
        <ImageContainer>
          <Image src={require("assets/about_02.png").default} />
        </ImageContainer>
        <ProfileContainer>
          <Poster src={require("assets/profile.jpg").default} />
          <Message>
            모든 페이지가 모든 해상도에 대응하도록 반응형 레이아웃을
            구현하였습니다. 노마드코더의 CSS 레이아웃 마스터 강의가 큰 도움이
            되었습니다. 해상도에 따라 단순히 크기만 줄이는 것이 아니라
            유동적으로 엘리먼트와 디스플레이스를 변형하여 해상도가 작아지더라도
            이용이 불편해지지 않도록 신경썼습니다.
          </Message>
        </ProfileContainer>
        <ImageContainer>
          <Image src={require("assets/about_03.gif").default} />
          <AlertText>
            ⚠️ GIF 용량이 커서 로드될 때까지 재생이 느려질 수 있습니다. 잠시만
            기다려주세요.
          </AlertText>
        </ImageContainer>
        <ProfileContainer>
          <Poster src={require("assets/profile.jpg").default} />
          <Message>
            일반적으로 해상도가 작아지면 주 메뉴를 햄버거(☰) 아이콘으로 압축하여
            뎁스를 늘리지만, NICOFLIX에서는 개별 아이콘으로 축소 표현하여 기존
            사용자 경험(UX)를 해치지 않도록 하였습니다. 모바일 기기에서
            백그라운드 동영상 재생이 불가하기 때문에 화면이 작아질 경우 동영상이
            아닌 백드롭 이미지로 레이아웃이 유동적으로 변경이 되도록
            구현하였습니다.
          </Message>
        </ProfileContainer>
        <Base.GradientLine />
      </Section>
      <Section>
        <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
          #무한 스크롤링(Infinite Scrolliing)
        </Title>
        <ImageContainer>
          <Image src={require("assets/about_04.gif").default} />
          <AlertText>
            ⚠️ GIF 용량이 커서 로드될 때까지 재생이 느려질 수 있습니다. 잠시만
            기다려주세요.
          </AlertText>
        </ImageContainer>
        <ProfileContainer>
          <Poster src={require("assets/profile.jpg").default} />
          <Message>
            기존 강의에서는 API 요청 기본값인 1페이지에 대한 값만 가져오지만 이
            부분을 infinite Scrolling으로 구현하여 페이지를 아래로 스크롤하면
            지속적으로 다음 값을 불러오도록 구현하였습니다. 영화, 티비쇼, 인물,
            검색에 모두 적용되었습니다. 하지만 구현 후 깨달았던 점은 쌓이는
            데이터의 과부하 문제로 웹 페이지에서는 어울리지 않는 방식이라는 것을
            알게되었습니다. 실제 제공할 서비스로 다시 구현한다면 페이지를 넘기는
            방식으로 구현할 것 같습니다.
          </Message>
        </ProfileContainer>
        <Base.GradientLine />
      </Section>
      <Section>
        <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
          #세부정보 확장(Expand Details)
        </Title>
        <ImageContainer>
          <Image src={require("assets/about_05.gif").default} />
          <AlertText>
            ⚠️ GIF 용량이 커서 로드될 때까지 재생이 느려질 수 있습니다. 잠시만
            기다려주세요.
          </AlertText>
        </ImageContainer>
        <ProfileContainer>
          <Poster src={require("assets/profile.jpg").default} />
          <Message>
            API에서 제공하는 정보를 최대한 사용하고 싶었습니다. 영화와 티비쇼의
            기본적인 정보 뿐만 아니라 검색 키워드, 출연 배우, 제작 인물을 비롯해
            제작사와 사용자의 리뷰 그리고 마지막으로 비슷한 영화를 추천하여
            실제로 웹페이지가 유용하게 사용될 수 있도록 구현해보았습니다. 추가로
            정적인 데이터로 표시되지 않도록 각 요소에 링크를 지원하여 영화,
            티비쇼, 인물, 검색 페이지가 자연스럽게 순환되도록 유도하였습니다.
          </Message>
        </ProfileContainer>
        <Base.GradientLine />
      </Section>
      <Section>
        <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
          #리엑트 훅스(React Hooks)
        </Title>
        <ImageContainer>
          <Image src={require("assets/about_06.png").default} />
        </ImageContainer>
        <ProfileContainer>
          <Poster src={require("assets/profile.jpg").default} />
          <Message>
            올드한 클래식 컴포넌트를 사용하지 않고, 니꼬 선생님을 따라 섹시한(?)
            ES6 문법을 사용하였습니다. 함수형 컴포넌트로 작성함에 따라
            자연스럽게 React Hooks을 사용하게 되었고, useEffect, useState와 같은
            제공되는 Hooks를 비롯해, 스스로 커스텀하게 Hook을 만들어
            사용해보았습니다. 예를 들어 무한 스크롤이 되는 곳에서 페이지마다
            상위를 올려주는 버튼이 필요한데 useScollTop를 만들어
            재사용하였습니다. 추가로 Redux까지 사용해보려 했지만, 상위
            컴포넌트에서 Props를 계층적으로 전달하면서 필요한 타입을 필수로
            정의해야하는 타입스크립트의 특수성을 일부러 경험해봄으로써 얼마나
            리덕스가 유용한지 경험해보았습니다.
          </Message>
        </ProfileContainer>
        <Base.GradientLine />
      </Section>
      <Section>
        <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
          #메타데이타(Metadata)
        </Title>
        <ImageContainer>
          <Image src={require("assets/about_07.png").default} />
        </ImageContainer>
        <ProfileContainer>
          <Poster src={require("assets/profile.jpg").default} />
          <Message>
            디테일을 상승(?)시키는 목적으로 고유한 Favicon과 웹 페이지를
            설명하는 텍스트와 이미지를 추가하였습니다. 노마드코더 홈페이지의
            코드를 복사하여 니코플릭스에 적용해보았습니다. 이로 인해 카톡으로
            링크를 줄 때에도 제법 예쁘게(?) 표현됩니다.
          </Message>
        </ProfileContainer>
        <Base.GradientLine />
      </Section>
      <Section>
        <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
          #Google Firebase
        </Title>
        <ImageContainer>
          <Image src={require("assets/about_09.png").default} />
        </ImageContainer>
        <ProfileContainer>
          <Poster src={require("assets/profile.jpg").default} />
          <Message>
            리엑트 강의와는 상관없지만, 유튜브 클론에서 넣었던 댓글 기능처럼
            방문자들이 의견을 남기는 방명록을 만들고 싶었습니다. 노마드코더 강의
            중 트위터 클론 강의에서 Firebase를 배워 해당 기능을 완성할 수
            있었습니다. Authentication과 Firestore로 회원정보를 생성/관리하고,
            Analytics까지 연결하여 Firebase Dashboard에서 분석 데이터가
            표시되도록 하였습니다.
          </Message>
        </ProfileContainer>
        <Base.GradientLine />
      </Section>
      <Section>
        <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
          #AWS Amplify
        </Title>
        <ImageContainer>
          <Image src={require("assets/about_10.png").default} />
        </ImageContainer>
        <ProfileContainer>
          <Poster src={require("assets/profile.jpg").default} />
          <Message>
            트위터 클론 강의에서 언급되었던 AWS Amplify를 사용해보고 싶었습니다.
            Firebase에서도 호스팅을 지원하지만, 프론트엔드 배포만 Amplify에서
            진행하기로 했습니다. 커스텀 도메인 세팅을 해보기 위해 기본 제공
            호스팅 주소를 사용하지 않았고, AWS Route 53에서 Nicoflix.net
            도메인을 구입해서 배포하였습니다.
          </Message>
        </ProfileContainer>
        <Base.GradientLine />
      </Section>
      <Section>
        <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
          #Standard 1320px Grid Design
        </Title>
        <ImageContainer>
          <Image src={require("assets/about_08.png").default} />
        </ImageContainer>
        <ProfileContainer>
          <Poster src={require("assets/profile.jpg").default} />
          <Message>
            제대로 된 웹 페이지를 제작하는 것은 처음이었기 때문에 Adobe XD를
            이용해 기초 설계를 먼저 진행했습니다. XD 초보자였기 때문에 별도로
            유튜브 강의를 찾아보면서 웹 디자이너들이 보편적으로 사용한다는 표준
            1320px 그리드를 기준으로 하여 공간의 불균형이 일어나지 않도록
            신경썼습니다.
          </Message>
        </ProfileContainer>
      </Section>
    </Container>
  );
};

export default Introduction;
