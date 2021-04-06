import React, { useEffect, useState } from "react";
import {
  Container,
  BannerContainer,
  Banner,
  Form,
  Section,
  Title,
  Description,
  InputTitle,
  Input,
  Submit,
  Alert,
} from "./style";
import Base from "Components/Base";
import Footer from "Components/Footer";
import SocialLogin from "Components/SocialLogin";
import { auth } from "fb";
import { useHistory } from "react-router";

const SignIn: React.FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  useEffect(() => {
    if (auth.currentUser) {
      history.push("/");
    }
  }, []);

  const onSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    signIn();
  };

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((e) => {
        window.alert(e.message);
      });
  };

  return (
    <>
      <Container>
        <Form onSubmit={onSubmit}>
          <BannerContainer>
            <Banner bgUrl={require("assets/title.png").default} />
            <Title>Login</Title>
            <Description>Please enter your email and password.</Description>
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

          <Submit type="submit" value="Login" />
        </Form>
      </Container>
      <Base.GradientLine />
      <SocialLogin />
      <Footer />
    </>
  );
};

export default SignIn;
