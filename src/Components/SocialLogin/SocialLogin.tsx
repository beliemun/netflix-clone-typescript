import React from "react";
import {
  Container,
  TitleContainer,
  InputContainer,
  Title,
  Description,
  SocialContainer,
  SocialButton,
} from "./style";
import { fb, auth } from "fb";
import { useHistory } from "react-router";

const SocialLogin = () => {
  let history = useHistory();

  const onClick = async (e: React.BaseSyntheticEvent) => {
    const {
      target: { name },
    } = e;
    let provider;
    if (name === "google") {
      provider = new fb.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new fb.auth.GithubAuthProvider();
    }
    if (provider) {
      auth.signInWithPopup(provider).then(() => history.push("/"));
    }
  };
  return (
    <Container>
      <InputContainer>
        <TitleContainer>
          <Title>Social Login</Title>
          <Description>
            You can also log in to your Google or GitHub account.
          </Description>
        </TitleContainer>
        <SocialContainer>
          <SocialButton name="google" onClick={onClick}>
            <i className="fab fa-google"></i>Google Login
          </SocialButton>
          <SocialButton name="github" onClick={onClick}>
            <i className="fab fa-github"></i>Github Login
          </SocialButton>
        </SocialContainer>
      </InputContainer>
    </Container>
  );
};

export default SocialLogin;
