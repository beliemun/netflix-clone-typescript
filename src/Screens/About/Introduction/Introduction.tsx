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
} from "../Home/style";

const Introduction: React.FunctionComponent = () => (
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
        <Poster src={require("assets/profile.jpeg").default} />
        <Message>
          모든 스크립트가 Typescript로 작성되었습니다. 재사용되는 인터페이스들은
          Types.d.ts 파일에 정의하여 재사용될 수 있도록 하였습니다. Typescript로
          개발해 본적은 처음이었고, 계념이 전무해서 막히는 부분이 생각보다
          많아서 고생을 했습니다. 타입스크립트를 머리로 이해하는 것과 실제로
          프로젝트에 적용시키는 것은 완전히 다르더라고요. 타입 스크립트를
          적용하기 위해서는 니꼬선생님께서 제공하시는 강좌만으로는 부족했기
          때문에 별도로 학습 시간을 가지고 도전했습니다.
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
        <Poster src={require("assets/profile.jpeg").default} />
        <Message>
          모든 페이지가 모든 해상도에 대응하도록 반응형 레이아웃을
          구현하였습니다. 해상도에 따라 단순히 크기만 줄이는 것이 아니라
          유동적으로 엘리먼트와 디스플레이스를 변형하여 해상도가 작아지더라도
          이용이 불편해지지 않도록 신경썼습니다.
        </Message>
      </ProfileContainer>
      <ImageContainer>
        <Image src={require("assets/about_03.gif").default} />
      </ImageContainer>
      <ProfileContainer>
        <Poster src={require("assets/profile.jpeg").default} />
        <Message>
          일반적으로 해상도가 작아지면 주 메뉴를 햄버거(☰) 아이콘으로 압축하여
          뎁스를 늘리지만, NICOFLIX에서는 개별 아이콘으로 축소 표현하여 기존
          사용자 경험(UX)를 해치지 않도록 하였습니다. 모바일 기기에서 백그라운드
          동영상 재생이 불가하기 때문에 화면이 작아질 경우 동영상이 아닌 백드롭
          이미지로 레이아웃이 유동적으로 변경이 되도록 구현하였습니다.
        </Message>
      </ProfileContainer>
      <Base.GradientLine />
    </Section>
    <Section>
      <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
        #무한 스크롤링(Inifite Scrolliing)
      </Title>
      <ImageContainer>
        <Image src={require("assets/about_04.gif").default} />
      </ImageContainer>
      <ProfileContainer>
        <Poster src={require("assets/profile.jpeg").default} />
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
      </ImageContainer>
      <ProfileContainer>
        <Poster src={require("assets/profile.jpeg").default} />
        <Message>
          API에서 제공하는 정보를 최대한 사용하고 싶었습니다. 영화와 티비쇼의
          기본적인 정보 뿐만 아니라 검색 키워드, 출연 배우, 제작 인물을 비롯해
          제작사와 사용자의 리뷰 그리고 마지막으로 비슷한 영화를 추천하여 실제로
          웹페이지가 유용하게 사용될 수 있도록 구현해보았습니다. 추가로 정적인
          데이터로 표시되지 않도록 각 요소에 링크를 지원하여 영화, 티비쇼, 인물,
          검색 페이지가 자연스럽게 순환되도록 유도하였습니다.
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
        <Poster src={require("assets/profile.jpeg").default} />
        <Message>
          올드한 클래식 컴포넌트를 사용하지 않고, 니꼬 선생님을 따라 섹시한(?)
          ES6 문법을 사용하였습니다. 함수형 컴포넌트로 작성함에 따라 자연스럽게
          React Hooks을 사용하게 되었고, useEffect, useState와 같은 제공되는
          Hooks를 비롯해, 스스로 커스텀하게 Hook을 만들어 사용해보았습니다. 예를
          들어 무한 스크롤이 되는 곳에서 페이지마다 상위를 올려주는 버튼이
          필요한데 useScollTop를 만들어 재사용하였습니다. 추가로 Redux까지
          사용해보고 싶었지만, API로 정보를 받아 표현만 해주는 NICOFLIX의 순수
          기능과는 어울리지 않았고 오히려 상위 컴포넌트에서 Props를 계층적으로
          전달하는 것이 타입스크립트를 이해하는데 큰 도움이 되었습니다.
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
        <Poster src={require("assets/profile.jpeg").default} />
        <Message>
          디테일을 상승(?)시키는 목적으로 고유한 Favicon과 웹 페이지를 설명하는
          텍스트와 이미지를 추가하였습니다. 노마드코더 홈페이지의 코드를
          복사하여 니코플릭스에 적용해보았습니다. 이로 인해 카톡으로 링크를 줄
          때에도 제법 예쁘게(?) 표현됩니다.
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
        <Poster src={require("assets/profile.jpeg").default} />
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

export default Introduction;
