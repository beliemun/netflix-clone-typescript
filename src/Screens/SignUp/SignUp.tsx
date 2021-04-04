import React, { useState } from "react";
import {
  Container,
  BannerContainer,
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
import SocialLogin from "Components/SocialLogin";
import { auth, fs } from "fb";
import { useHistory } from "react-router";
import firebase from "firebase";

const SignUp: React.FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  let history = useHistory();

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
      createAccount();
    }
  };

  const createUserDB = async (user: firebase.User) => {
    fs.collection("users").doc(user.uid).set({
      uid: user.uid,
      name,
      gender,
      createdAt: Date.now(),
      isAdmin: false,
    });
  };

  const createAccount = async () => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (userCredential.user) {
        createUserDB(userCredential.user);
      }
      history.push("/");
    } catch (e) {
      console.log(e);
      if (e.code == "auth/email-already-in-use") {
        window.alert("이미 사용중인 이메일입니다. 다시 입력해주세요.");
        clearEmail();
      } else if (e.code == "auth/invalid-email") {
        window.alert("이메일 형식이 올바르지 않습니다. 다시 입력해주세요.");
        clearEmail();
      } else if (e.code == "auth/operation-not-allowed") {
        window.alert(
          "이메일/비밀번호 가입이 불가합니다. 관리자에게 문의하세요."
        );
      } else if (e.code == "auth/weak-password") {
        window.alert("비밀번호는 6글자 이상입니다. 다시 입력해주세요.");
        clearPassword();
      } else {
        window.alert(e.message);
      }
    }
  };

  return (
    <>
      <Container>
        <ProfileContainer>
          <Poster src={require("assets/profile.jpg").default} />
          <Message>
            회원 가입은 필수가 아닙니다.
            <br />
            본래 노마드코더의 ReactJS 강의에서는 회원가입 기능이 없지만,
            방문자들이 간단히 글을 작성할 수 있는 공간을 만들고 싶어서
            추가하였습니다. 가입된 사용자만이 ABOUT 화면에서 글을 작성할 수
            있습니다. 이 부분은 노마드코더에서 무료로 제공하는 트위터 클론
            강의로 도움을 받았으며 Google Firebase를 사용하였습니다.
          </Message>
        </ProfileContainer>
        <Form onSubmit={onSubmit}>
          <BannerContainer>
            <Banner bgUrl={require("assets/title.png").default} />
            <Title>Create a new acccount</Title>
            <Description>All fields are required.</Description>
          </BannerContainer>
          <Base.GradientLine />
          <Base.Height height={50} />

          <Section>
            <InputTitle htmlFor="email">Email</InputTitle>
            <Input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Section>

          <Section>
            <InputTitle htmlFor="password">Password</InputTitle>
            <Input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Alert>⚠️ Please enter at least 6 characters.</Alert>
          </Section>

          <Section>
            <InputTitle htmlFor="confirm">Confirm Password</InputTitle>
            <Input
              type="password"
              id="confirm"
              name="confirm"
              required
              onChange={(e) => setConfirm(e.target.value)}
            />
          </Section>

          <Section>
            <InputTitle htmlFor="name">Name</InputTitle>
            <Input
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <Alert>
              ⚠️ When you create a comment, it appears as the author.
            </Alert>
          </Section>

          <Section>
            <InputTitle>Gender</InputTitle>
            <RadioContainer>
              <Label htmlFor="male">
                Male
                <Radio
                  type="radio"
                  id="male"
                  name="gender"
                  required
                  onChange={() => setGender("Male")}
                />
              </Label>
              <Label htmlFor="female">
                Female
                <Radio
                  type="radio"
                  name="gender"
                  id="female"
                  required
                  onChange={() => setGender("Female")}
                />
              </Label>
            </RadioContainer>
          </Section>

          <Submit type="submit" value="Create a new account" />
        </Form>
      </Container>
      <Base.GradientLine />
      <SocialLogin />
      <Footer />
    </>
  );
};

export default SignUp;
