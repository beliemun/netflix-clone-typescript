import React, { useEffect, useState } from "react";
import {
  Container,
  Banner,
  Form,
  Section,
  Title,
  Description,
  ProfileContainer,
  Poster,
  Message,
  InputTitle,
  Input,
  Label,
  RadioContainer,
  Radio,
  Submit,
  Alert,
} from "./style";
import Base from "Components/Base";
import Footer from "Components/Footer";

const SignUp: React.FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const clearPassword = () => {
    const password = document.getElementById("password") as HTMLInputElement;
    const confirm = document.getElementById("confirm") as HTMLInputElement;
    password.value = "";
    confirm.value = "";
    password.focus();
  };

  const checkPassword = (): boolean => {
    if (password !== confirm) {
      window.alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
      clearPassword();
      return false;
    } else if (password.length < 8) {
      window.alert("비밀번호는 8글자입니다. 다시 입력해주세요.");
      clearPassword();
      return false;
    }
    return true;
  };

  const clearEmail = () => {
    const email = document.getElementById("email") as HTMLInputElement;
    email.value = "";
    email.focus();
  };

  const onSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (checkPassword()) {
      // 비번 일치 확인
      console.log(
        `email:${email}, password:${password}, confirm:${confirm}, name:${name}, gender:${gender}`
      );
    }
  };
  return (
    <Container>
      <Banner bgUrl={require("assets/title.png").default} />
      <Base.GradientLine />
      <ProfileContainer>
        <Poster src={require("assets/profile.jpg").default} />
        <Message>
          회원 가입은 필수가 아닙니다.
          <br />
          본래 노마드코더의 ReactJS 강의에서는 회원가입 기능이 없지만, 회원 전용
          방명록 기능을 넣기 위해서 추가하였습니다. 가입 후 ABOUT 화면에서
          회원만 글을 작성할 수 있습니다. 이것 역시 노마드코더에서 무료로
          제공하는 트위터 클론 강의로 도움을 받았고, Google Firebase가 아닌 AWS
          Amplify를 사용해보았습니다.
        </Message>
      </ProfileContainer>
      <Form onSubmit={onSubmit}>
        <Title>신규 계정 만들기</Title>
        <Description>모든 입력란은 필수 항목입니다.</Description>
        <Base.GradientLine />
        <Base.Height height={30} />

        <Section>
          <InputTitle htmlFor="email">이메일</InputTitle>
          <Input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Alert>
            ⚠️ 가입 인증번호가 전송됩니다. 실제로 사용하는 이메일을
            입력해주세요.
          </Alert>
        </Section>

        <Section>
          <InputTitle htmlFor="password">비밀번호</InputTitle>
          <Input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Section>

        <Section>
          <InputTitle htmlFor="confirm">비밀번호 확인</InputTitle>
          <Input
            type="password"
            id="confirm"
            name="confirm"
            required
            onChange={(e) => setConfirm(e.target.value)}
          />
        </Section>

        <Section>
          <InputTitle htmlFor="name">닉네임</InputTitle>
          <Input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Section>

        <Section>
          <InputTitle>성별</InputTitle>
          <RadioContainer>
            <Label htmlFor="male">
              남성
              <Radio
                type="radio"
                id="male"
                name="gender"
                required
                onChange={(e) => setGender("Male")}
              />
            </Label>
            <Label htmlFor="female">
              여성
              <Radio
                type="radio"
                name="gender"
                id="female"
                required
                onChange={(e) => setGender("Female")}
              />
            </Label>
          </RadioContainer>
        </Section>

        <Submit type="submit" value="계정 생성" />
      </Form>
      <Footer />
    </Container>
  );
};

export default SignUp;
