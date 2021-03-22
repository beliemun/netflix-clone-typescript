import Base from "Components/Base";
import React from "react";
import {
  Container,
  Section,
  Title,
  ProfileContainer,
  Poster,
  Message,
  LectureContainer,
  Lecture,
  LectureTitleContainer,
  LectureTitle,
  LectureButton,
  A,
} from "../Home/style";
import useScrollTop from "hooks/useScollTop";

const Recommendation: React.FunctionComponent = () => {
  const { elementRef, onClick } = useScrollTop();

  return (
    <Container>
      <Section>
        <Title bgUrl={require("assets/texture.jpg").default} isHeader={true}>
          도움이 된 다른 강의
        </Title>
      </Section>
      <Section>
        <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
          #유튜브 클론 코딩
        </Title>
        <ProfileContainer>
          <Poster src={require("assets/profile.jpeg").default} />
          <Message>
            HTML, CSS, JS 초보 코스를 끝내고 도전했던 최초의 풀스택 강의로 웹
            개발에 전반적인 능력을 상승시킬 수 있는 강의였습니다. React와 같은
            편리한 환경에 먼저 적응하지 않고, NodeJS로 시작하여 순수한 환경에서
            웹 개발을 시작하는 것은 노마드 코더에서만 느꼈던 특별한
            경험이었습니다. 레거시한 환경속에서 개발하기 때문에 불편함이
            많았지만, 이 경험이 NICOFLIX를 만들 때 얼마나 스스로 계념이
            성장했는지 느낄 수 있었습니다. 실제로 유튜브 클론 코딩 때는 슬렉에서
            질문을 하면서 도움을 받았지만 ReactJS 부터는 스스로 구글에서
            검색하거나 레퍼런스를 찾아 해결하는 모습으로 변화하게 됩니다. 특히
            이때 SCSS를 이용한 레이아웃을 처음 해보는데, ReactJS에서 디자인할 때
            큰 도움이 됩니다.
          </Message>
        </ProfileContainer>
        <LectureContainer>
          <Lecture src="https://d1telmomo28umc.cloudfront.net/media/public/avatars/ytThumbnail_rtMv4Du.jpg"></Lecture>
          <LectureTitleContainer>
            <LectureTitle>[풀스택] 유튜브 클론코딩</LectureTitle>
            <A href="https://nomadcoders.co/wetube" target="_blank">
              <LectureButton>강의 이동하기</LectureButton>
            </A>
          </LectureTitleContainer>
        </LectureContainer>
        <Base.GradientLine />
      </Section>
      <Section>
        <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
          #CSS Layout 마스터 클래스
        </Title>
        <ProfileContainer>
          <Poster src={require("assets/profile.jpeg").default} />
          <Message>
            유튜브 클론코딩의 졸업작품으로 NicoTube를 제작할 때 가장 많이 느꼈던
            아쉬움은 레이아웃이었습니다. 웹 개발은 앱 개발과 다르게 스크린에서
            표현되는 영역이 디바이스에 따라 크게 차이가 나기 때문에 NicoTube를
            모바일에서 보면 레이아웃이 엉망이었죠. CSS Layout 마스터 클래스의
            시작과 끝은 flex와 grid였습니다. 이 두가지를 강의 내내 연습하고
            @media 구문을 사용하게 되면 모든 해상도를 대응할 수 있는 막강한
            능력이 생깁니다. 실제로 NICOFLIX는 모든 페이지의 모든 요소에 대해
            해상도에 따라 대응하도록 레이아웃이 적용되어있습니다. 지금 바로
            페이지를 좌우로 줄였다~ 늘렸다~ 테스트해보세요.
          </Message>
        </ProfileContainer>
        <LectureContainer>
          <Lecture
            src="https://d1telmomo28umc.cloudfront.net/media/public/thumbnails/masterclassThumbnail_uJ2rq9C.jpg
"
          ></Lecture>
          <LectureTitleContainer>
            <LectureTitle>CSS Layout 마스터 클래스</LectureTitle>
            <A
              href="https://nomadcoders.co/css-layout-masterclass"
              target="_blank"
            >
              <LectureButton>강의 이동하기</LectureButton>
            </A>
          </LectureTitleContainer>
        </LectureContainer>
        <Base.GradientLine />
      </Section>
      <Section>
        <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
          #실전형 React Hooks 10개
        </Title>
        <ProfileContainer>
          <Poster src={require("assets/profile.jpeg").default} />
          <Message>
            앞서 소개한 내용대로 NICOFLIX는 Class를 사용하지 않고, 모든
            스크립트를 함수형 컴포넌트로 작성하였습니다. 6개월 전만해도 저는
            개발자가 아니었기 때문에 Class 컴포넌트 형식으로 개발을 해본 경험도
            없을뿐더러 일부러 옛스타일을 따라가고 싶진 않았습니다. 니꼬 선생님의
            말처럼 섹시한 코딩 스타일을 원했기 때문에 ES6의 섹시한 문법들을
            사용하고 있습니다. 때문에 자연스럽게 useState, useEffect와 같은
            Hooks를 사용하게 되는데, 스스로 이러한 Hooks를 커스텀하게 작성하기
            위해서는 도움이 되는 강의라고 할 수 있습니다. 물론 기제공되는
            Hooks도 제대로 사용하기 어려운데, 스스로 만들어 사용한다는 것은
            지금도 어렵습니다. 하지만 NICOFLIX에서는 어떻게든 제가 스스로 만든
            Hooks를 구겨넣기 위해 노력했습니다.
          </Message>
        </ProfileContainer>
        <LectureContainer>
          <Lecture
            src="https://d1telmomo28umc.cloudfront.net/media/public/thumbnails/reactHooks.jpg
"
          ></Lecture>
          <LectureTitleContainer>
            <LectureTitle>실전형 React Hooks 10개</LectureTitle>
            <A
              href="https://nomadcoders.co/react-hooks-introduction"
              target="_blank"
            >
              <LectureButton>강의 이동하기</LectureButton>
            </A>
          </LectureTitleContainer>
        </LectureContainer>
        <Base.GradientLine />
      </Section>
      <Section>
        <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
          #Typescript로 블록체인 만들기
        </Title>
        <ProfileContainer>
          <Poster src={require("assets/profile.jpeg").default} />
          <Message>
            저는 ReactJS의 졸업작품을 반드시 Typescript로 개발하고 싶었습니다.
            이 강의에서 Typescript로 제작하지 않으면 다른 강의에서 작성할 기회가
            없어보였거든요. 하지만 예상과 다르게 블록체인을 만드는 이 강의로는
            NICOFLIX를 만들기에는 필요한 Typescript 정보가 부족했습니다.
            Typescript로 작성할 때 나타나는 문제점들은 초보자인 저에게 해결하기
            어려운 고난이었고, 다른 여러가지 유튜브 강의를 병행하면서 공부해야
            해결할 수 있었습니다. 왜냐하면 React에는 여러분이 정의하지 않은
            수많은 타입들이 있기 때문이죠. 하지만 이 강의는 꼭 들어야합니다.
            그렇지 않으면 여러분은 절대로, 절대로, 절대로 ReactJS의 졸업작품을
            Typescript로 도전하지 않게 될거라 생각합니다.
          </Message>
        </ProfileContainer>
        <LectureContainer>
          <Lecture
            src="https://d1telmomo28umc.cloudfront.net/media/public/thumbnails/tsThumb_6wFmUqV.jpg

"
          ></Lecture>
          <LectureTitleContainer>
            <LectureTitle>Typescript로 블록체인 만들기</LectureTitle>
            <A
              href="https://nomadcoders.co/typescript-for-beginners"
              target="_blank"
            >
              <LectureButton>강의 이동하기</LectureButton>
            </A>
          </LectureTitleContainer>
        </LectureContainer>
        <Base.GradientLine />
      </Section>
      <Base.ScrollUpButton ref={elementRef} onClick={onClick}>
        <i className="fas fa-angle-double-up"></i>
      </Base.ScrollUpButton>
    </Container>
  );
};

export default Recommendation;
