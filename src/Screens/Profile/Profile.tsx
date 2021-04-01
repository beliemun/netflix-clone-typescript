import React from "react";
import {
  Container,
  InputContainer,
  TitleContainer,
  Title,
  Description,
} from "./style";

const Profile: React.FunctionComponent = () => {
  return (
    <Container>
      <InputContainer>
        <TitleContainer>
          <Title>Profile</Title>
          <Description>You can edit your profile on the page.</Description>
        </TitleContainer>
      </InputContainer>
    </Container>
  );
};

export default Profile;
