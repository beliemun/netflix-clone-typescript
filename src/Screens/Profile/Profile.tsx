import React, { useEffect, useState } from "react";
import {
  Container,
  InputContainer,
  TitleContainer,
  Title,
  Description,
  Avatar,
  Section,
  Email,
  Input,
  InputTitle,
  Label,
  RadioContainer,
  Radio,
  SubmitContainer,
  Submit,
} from "./style";
import Base from "Components/Base";
import { IUser } from "types";
import { fs } from "fb";

interface IProps {
  user: IUser | null;
}

const Profile: React.FunctionComponent<IProps> = ({ user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [photoURL, setPhotoURL] = useState(user ? user.photoURL : "");
  const [gender, setGender] = useState(user ? user.gender : "");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setPhotoURL(user.photoURL);
      setGender(user.gender);
    }
  }, [user?.name, user?.photoURL, user?.gender]);

  const updateProfile = () => {
    const confirm = window.confirm(
      "Do you want to update your profile with this information?"
    );
    if (user && confirm) {
      fs.doc(`users/${user.uid}`)
        .update({
          name,
          photoURL,
          gender,
        })
        .then(() => {
          window.alert("Successfully changed.");
        })
        .catch((e) => window.alert(e));
    }
  };

  return (
    <Container>
      <InputContainer>
        <TitleContainer>
          <Title>Profile</Title>
        </TitleContainer>
        <Base.Height height={30} />
        <Base.GradientLine />
        <Base.Height height={50} />

        <TitleContainer>
          {user?.photoURL ? (
            <Avatar key={Date.now()} src={user.photoURL} />
          ) : (
            <></>
          )}
        </TitleContainer>

        <Section>
          <InputTitle htmlFor="name">Email</InputTitle>
          <Email>{user?.email}</Email>
        </Section>

        <Section>
          <InputTitle htmlFor="name">Name</InputTitle>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Section>

        <Section>
          <InputTitle htmlFor="photo">Photo URL</InputTitle>
          <Input
            type="textarea"
            id="photo"
            name="photo"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            required
          />
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
                checked={gender === "Male" ? true : false}
                onChange={() => setGender("Male")}
                required
              />
            </Label>
            <Label htmlFor="female">
              Female
              <Radio
                type="radio"
                id="female"
                name="gender"
                checked={gender === "Female" ? true : false}
                onChange={() => setGender("Female")}
                required
              />
            </Label>
          </RadioContainer>
        </Section>
        <Description>
          If you have updated the photo URL, the previous picture will be shown
          due to caching in the browser. Please refresh your browser after
          updating.
        </Description>
        <SubmitContainer>
          <Submit onClick={updateProfile}>Update</Submit>
          <Submit>Change Password</Submit>
        </SubmitContainer>
      </InputContainer>
    </Container>
  );
};

export default Profile;
