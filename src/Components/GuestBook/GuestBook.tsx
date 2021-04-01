import React, { useState } from "react";
import {
  Container,
  ProfileContainer,
  MessageContainer,
  Name,
  Message,
  Poster,
  Form,
  TextInput,
  SubmitInput,
} from "./style";
import { IUser } from "types";

const GuestBook: React.FunctionComponent<IUser> = ({ user }) => {
  const [text, setText] = useState("");
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <TextInput type="text" onChange={(e) => setText(e.target.value)} />
        <SubmitInput type="submit" />
      </Form>
    </Container>
  );
};

export default GuestBook;
