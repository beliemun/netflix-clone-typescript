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
    const input = document.getElementById("input-text") as HTMLInputElement;
    input.value = "";
  };
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <TextInput
          id="input-text"
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="여기에 글을 남겨보세요."
        />
        <SubmitInput type="submit" value="작성하기" />
      </Form>
    </Container>
  );
};

export default GuestBook;
