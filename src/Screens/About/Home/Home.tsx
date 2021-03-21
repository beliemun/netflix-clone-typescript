import React from "react";
import { Container, ProfileContainer, Title, Poster, Message } from "./style";

const Home: React.FunctionComponent = () => (
  <Container>
    <Title bgUrl={require("assets/texture.jpg").default} isHeader={true}>
      너는 누구냐?
    </Title>
    <ProfileContainer>
      <Poster src={require("assets/profile.jpeg").default} />
      <Message>
        안녕하세요! 노마드코더 수강생 @beliemun 입니다. 이 페이지는 NICOFLIX를
        개발하면서 별도로 적용된 기술을 기록하기 위해 만들었습니다. 제 졸업
        작품을 보고 개발에 궁금한 점이 있거나 의욕을 느끼실 새로운 도전자분을
        위해 개발에 도움이 되었던 노마드코더의 강의들을 소개하고 어떻게 도움이
        되었는지를 정리하기 위해 만들어졌습니다. 벌써 노마드코더 수강생이 된지
        6개월이 되었네요. HTML 초보 강의 들었던 게 엇그제 같은데 이제 이런
        웹페이지를 만들 수 있다니 제가 생각해도 신기하네요 :)
      </Message>
    </ProfileContainer>
  </Container>
);

export default Home;
