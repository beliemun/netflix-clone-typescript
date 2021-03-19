import React from "react";
import { Container, ProfileContainer, Poster, Message } from "./style";

const Home: React.FunctionComponent = () => (
  <Container>
    <ProfileContainer>
      <Poster src={require("assets/profile.jpeg").default} />
      <Message>
        "안녕하세요! 노마드코더 수강생 @beliemun 입니다. 이 페이지는 NICOFLIX를
        개발하면서 별도로 적용된 기능을 기술하기 위해 만들었습니다. 추가로 제
        졸업 작품을 보고 개발에 궁금한 점이 있거나 의욕을 느끼실 새로운
        도전자분을 위해 개발에 도움이 되었던 노마드코더의 강의들은 안내하고
        어떻게 도움이 되었는지를 정리하기 위해 만들어졌습니다."
      </Message>
    </ProfileContainer>
  </Container>
);

export default Home;
