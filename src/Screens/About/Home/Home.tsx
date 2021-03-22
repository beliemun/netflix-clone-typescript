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
        안녕하세요! 노마드코더 수강생 @beliemun 입니다. <br /> <br />
        NICOFLIX는 노마드코더의 ReactJS 강의 졸업작품입니다. ReactJS 강의 내용을
        확장하여 구현하고, 매일 과제로 나오는 챌린지코드를 제출하는 것에 끝내지
        않고 졸업작품에 적용해보면서 완성도를 최대한 올리는 것에 집중하였습니다.
        <br />
        <br /> 지금 보고계신 About 페이지는 NICOFLIX에 적용된 기술을 기록하고,
        개발 과정을 복기하기위한 목적으로 추가하였습니다. 작년 20년 9월 즈음에
        HTML 초보 강의로 시작하여 현재 21년 4월이니까 벌써 수강생이 된지 7개월이
        되었네요. 도전하시는 다른 수강생분들도 화이팅 :)
      </Message>
    </ProfileContainer>
  </Container>
);

export default Home;
