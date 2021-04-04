import React, { useEffect, useState } from "react";
import { Container, Form, TextInput, SubmitInput } from "./style";
import MessageItem from "Components/MessageItem";
import { IUser, IComment } from "types";
import { fs } from "fb";

interface IProps {
  user: IUser | null;
}

const GuestBook: React.FunctionComponent<IProps> = ({ user }) => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = () => {
    fs.collection("comments")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const docs = snapshot.docs.map((doc) => {
          const data = doc.data();
          const comment = {
            id: doc.id,
            text: data.text,
            createdAt: data.createdAt,
            creatorId: data.creatorId,
          };
          return comment;
        });
        setComments(docs);
      });
  };

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (text !== "") {
      await fs
        .collection("comments")
        .add({ text, createdAt: Date.now(), creatorId: user?.uid });
      const input = document.getElementById("input-text") as HTMLInputElement;
      setText("");
      input.value = "";
    }
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
      {comments.map((comment) => (
        <MessageItem key={comment.id} comment={comment} user={user} />
      ))}
    </Container>
  );
};

export default GuestBook;
