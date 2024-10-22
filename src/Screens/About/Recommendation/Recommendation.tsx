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

const Recommendation: React.FunctionComponent = () => (
  <Container>
    <Section>
      <Title bgUrl={require("assets/texture.jpg").default} isHeader={true}>
        도움이 된 핵심 강의
      </Title>
    </Section>
    <Section>
      <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
        #유튜브 클론 코딩
      </Title>
      <ProfileContainer>
        <Poster src={require("assets/profile.jpg").default} />
        <Message>
          HTML, CSS, JS 초보 코스를 끝내고 도전했던 최초의 풀스택 강의로 웹
          개발에 전반적인 능력을 상승시킬 수 있는 강의였습니다. React와 같은
          편리한 환경에 먼저 적응하지 않고, NodeJS로 시작하여 순수한 환경에서 웹
          개발을 시작하는 것은 노마드 코더에서만 느꼈던 특별한 경험이었습니다.
          레거시한 환경속에서 개발하기 때문에 불편함이 많았지만, 이 경험이
          NICOFLIX를 만들 때 얼마나 스스로 계념이 성장했는지 느낄 수 있었습니다.
          실제로 유튜브 클론 코딩 때는 슬렉에서 질문을 하면서 도움을 받았지만
          ReactJS 부터는 스스로 구글에서 검색하거나 레퍼런스를 찾아 해결하는
          모습으로 변화하게 됩니다. 특히 이때 SCSS를 이용한 레이아웃을 처음
          해보는데, ReactJS에서 디자인할 때 큰 도움이 됩니다.
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
        <Poster src={require("assets/profile.jpg").default} />
        <Message>
          유튜브 클론코딩의 졸업작품으로 NicoTube를 제작할 때 가장 많이 느꼈던
          아쉬움은 레이아웃이었습니다. 웹 개발은 앱 개발과 다르게 스크린에서
          표현되는 영역이 디바이스에 따라 크게 차이가 나기 때문에 NicoTube를
          모바일에서 보면 레이아웃이 엉망이었죠. CSS Layout 마스터 클래스의
          시작과 끝은 flex와 grid였습니다. 이 두가지를 강의 내내 연습하고 @media
          구문을 사용하게 되면 모든 해상도를 대응할 수 있는 막강한 능력이
          생깁니다. 실제로 NICOFLIX는 모든 페이지의 모든 요소에 대해 해상도에
          따라 대응하도록 레이아웃이 적용되어있습니다. 지금 바로 페이지를 좌우로
          줄였다~ 늘렸다~ 테스트해보세요.
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
        <Poster src={require("assets/profile.jpg").default} />
        <Message>
          앞서 소개한 내용대로 NICOFLIX는 Class를 사용하지 않고, 모든 스크립트를
          함수형 컴포넌트로 작성하였습니다. 니꼬 선생님의 말처럼 섹시한 코딩
          스타일을 원했기 때문에 ES6의 섹시한 문법들을 사용하고 있습니다. 때문에
          자연스럽게 useState, useEffect와 같은 Hooks를 사용하게 되는데, 스스로
          이러한 Hooks를 커스텀하게 작성하기 위해서는 도움이 되는 강의라고 할 수
          있습니다. 물론 기제공되는 Hooks도 제대로 사용하기 어려운데, 스스로
          만들어 사용한다는 것은 지금도 어렵습니다. 하지만 NICOFLIX에서는
          어떻게든 제가 스스로 만든 Hooks를 구겨넣기 위해 노력했습니다.
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
        <Poster src={require("assets/profile.jpg").default} />
        <Message>
          저는 ReactJS의 졸업작품을 반드시 TS(Typescript)로 개발하고 싶었습니다.
          이 강의에서 TS로 제작하지 않으면 다른 강의에서 작성할 기회가
          없어보였거든요. 하지만 니꼬샘이 제공해주는 TS 강의내용으로는
          NICOFLIX를 완성할 수는 없었습니다. TS는 단순히 타입만 이해한다고
          사용할 수 있는 것이 아니었습니다. TS 프로젝트를 생성한 뒤부터 문제가
          터지기 시작했고 TS 초보자인 저에게 해결하기 어려운 고난이었지만, 다른
          여러가지 유튜브 강의를 병행하면서 해결할 수 있었습니다. TS는 남들이
          얘기하는 것처럼 절대 단순하고 간단하지 않습니다. 왜 많은 JS개발자가
          장점만 있는 TS로 쉽게 전향하지 못하는지가 그 이유라 생각합니다. TS로
          꼭 넘어가야 하는 이유는 JS는 문법만 배워도 사용할 수 있지만 TS를
          접하면 문법을 넘어 구조를 이해하는 경험을 접하기 때문이라 생각합니다.
          때문에 더 나은 코더가 되기 위해서는 이 강의는 꼭 들어야합니다. 그렇지
          않으면 여러분은 절대로, 절대로, 절대로 ReactJS의 졸업작품을
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
    <Section>
      <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
        #트위터 클론코딩
      </Title>
      <ProfileContainer>
        <Poster src={require("assets/profile.jpg").default} />
        <Message>
          About 페이지에 있는 방문자 의견 남기기 기능을 구현할 수 있게 해준 핵심
          강의입니다. 유튜브 클론 코딩을 끝냈지만 그 당시 몽고디비 설정부터
          사용자 인증은 어떻게 했고, 디비는 어디에 두고 또 파일 저장은 어떻게
          했는지 지금 생각해보면 사실 기억이 전혀 나질 않습니다(?). 인증, 디비,
          스토리지 모두를 Firebase 하나로 해결할 수 있는 것은 정말 매력이 아닐
          수 없다고 생각합니다. 트위터 클론 코딩에서는 이 위대한(?) 서비스를
          무료로 배울 수 있습니다. 단순히 Firebase 사용법뿐만 아니라 디비보안
          규칙과 키보안에 관한 정보도 아주 유용했습니다.
        </Message>
      </ProfileContainer>
      <LectureContainer>
        <Lecture
          src="https://d1telmomo28umc.cloudfront.net/media/public/thumbnails/firebase.jpg

"
        ></Lecture>
        <LectureTitleContainer>
          <LectureTitle>트위터 클론코딩</LectureTitle>
          <A href="https://nomadcoders.co/nwitter" target="_blank">
            <LectureButton>강의 이동하기</LectureButton>
          </A>
        </LectureTitleContainer>
      </LectureContainer>
    </Section>
  </Container>
);

export default Recommendation;
