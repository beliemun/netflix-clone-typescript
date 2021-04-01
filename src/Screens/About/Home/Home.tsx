import React from "react";
import {
  Container,
  ProfileContainer,
  Title,
  Poster,
  Message,
  Description,
  LinkText,
} from "./style";
import Base from "Components/Base";
import { IUser } from "types";

const Home: React.FunctionComponent<IUser> = ({ user }) => (
  <Container>
    <Title bgUrl={require("assets/texture.jpg").default} isHeader={true}>
      너는 누구냐?
    </Title>
    <ProfileContainer>
      <Poster src={require("assets/profile.jpg").default} />
      <Message>
        안녕하세요! 노마드코더 수강생 @beliemun 입니다. <br /> <br />
        NICOFLIX는 노마드코더의 ReactJS 강의 졸업작품입니다. 노마드 코더에서
        제공하는 다른 강의 내용을 결합하고, 매일 과제로 나오는 챌린지코드도
        졸업작품에 적용해보면서 기능을 확장하여 졸업작품의 완성도를 최대한
        올리는 것에 집중하였습니다.
        <br />
        <br /> 지금 보고계신 About 페이지는 NICOFLIX에 적용된 기술을 기록하고,
        개발 과정을 복기하기위한 목적으로 추가하였습니다. 작년 20년 9월 즈음에
        HTML/CSS 강의로 시작해서 현재 21년 4월이니까 벌써 수강생이 된지 7개월이
        되었네요. 도전하시는 다른 수강생분들도 화이팅하시기 바랍니다. :)
      </Message>
    </ProfileContainer>
    <Base.GradientLine />
    <Base.Height height={30} />
    <Title bgUrl={require("assets/texture.jpg").default} isHeader={true}>
      방명록 남기기
    </Title>
    <Description>
      방문자들이 글을 남길 수 있는 공간입니다. 간단한 회원 가입후 글을
      남겨보세요.
    </Description>
    <Base.Height height={-10} />
    <Description>
      {!user && (
        <>
          <LinkText to="/signin">{`[로그인]`}</LinkText>
          <LinkText to="/signup">{`[계정 생성]`}</LinkText>
        </>
      )}
    </Description>
  </Container>
);

export default Home;
