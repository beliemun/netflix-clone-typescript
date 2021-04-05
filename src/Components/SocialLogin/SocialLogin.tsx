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
import { fb, auth, fs } from "fb";
import { useHistory } from "react-router";

interface IUserInfo {
  additionalUserInfo: {
    name: string;
    email: string;
  };
}

const SocialLogin: React.FunctionComponent = () => {
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
      const userCredential = await auth.signInWithPopup(provider);
      const user = userCredential.user;

      if (user) {
        const isNewUser = userCredential.additionalUserInfo?.isNewUser;
        if (isNewUser) {
          fs.doc(`users/${user.uid}`)
            .set({
              uid: user.uid,
              email: user.email,
              name: user.displayName
                ? user.displayName
                : userCredential.additionalUserInfo?.username,
              gender: "Male",
              createdAt: Date.now(),
              photoURL: user.photoURL,
              isAdmin: false,
            })
            .then(() => history.push("/"));
        } else {
          history.push("/");
        }
      }
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
