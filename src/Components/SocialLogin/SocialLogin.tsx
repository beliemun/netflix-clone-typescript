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
import Base from "Components/Base";

const SocialLogin = () => (
  <Container>
    <InputContainer>
      <TitleContainer>
        <Title>Social Login</Title>
        <Description>
          You can also log in to your Google or GitHub account.
        </Description>
      </TitleContainer>
      <SocialContainer>
        <SocialButton>
          <i className="fab fa-google"></i>Google Login
        </SocialButton>
        <SocialButton>
          <i className="fab fa-github"></i>Github Login
        </SocialButton>
      </SocialContainer>
    </InputContainer>
  </Container>
);

export default SocialLogin;
