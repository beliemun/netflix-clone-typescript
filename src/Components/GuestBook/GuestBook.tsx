import React, { useEffect, useState, useRef } from "react";
import { Container, Form, TextInput, SubmitInput } from "./style";
import MessageItem from "Components/MessageItem";
import { IUser, IComment } from "types";
import { db } from "fb";
import firebase from "firebase";

interface IProps {
  user: IUser | null;
}

const GuestBook: React.FunctionComponent<IProps> = ({ user }) => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState(false);
  const endOfComments = useRef(false);
  const latestDoc = useRef<
    firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
  >();

  useEffect(() => {
    updateComments();
  }, []);

  useEffect(() => {
    const checkTouchBottom = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight * 0.9 && !loading) {
        updateComments();
      }
    };

    document.addEventListener("scroll", checkTouchBottom);
    return () => document.removeEventListener("scroll", checkTouchBottom);
  }, [loading]);

  const updateComments = async () => {
    setLoading(true);
    const limit = 5;

    let ref = db.collection("comments").orderBy("createdAt", "desc");
    if (latestDoc.current) {
      ref = ref.startAfter(latestDoc.current);
    }

    const data = await ref.limit(limit).get();
    latestDoc.current = data.docs[data.docs.length - 1];

    const updatedComments = data.docs.map((doc) => ({
      id: doc.id,
      text: doc.data().text,
      createdAt: doc.data().createdAt,
      creatorId: doc.data().creatorId,
    }));

    if (!endOfComments.current) {
      setComments((prev) => [...prev, ...updatedComments]);
    }
    if (data.docs.length < limit) {
      endOfComments.current = true;
    }
    setLoading(false);
  };

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (text === "") return;

    const createdAt = Date.now();
    await db
      .collection("comments")
      .add({ text, createdAt, creatorId: user?.uid })
      .then((doc) => {
        const comment = {
          id: doc.id,
          text,
          createdAt,
          creatorId: user?.uid,
        } as IComment;
        setComments((prev) => [comment, ...prev]);
      });
    await db.doc(`users/${user?.uid}`).update({ latestPostTime: createdAt });

    const input = document.getElementById("input-text") as HTMLInputElement;
    setText("");
    input.value = "";
  };

  return (
    <Container>
      {user && (
        <Form onSubmit={onSubmit}>
          <TextInput
            id="input-text"
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="여기에 글을 남겨보세요."
          />
          <SubmitInput type="submit" value="작성하기" />
        </Form>
      )}
      {comments.map((comment) => (
        <MessageItem
          key={comment.id}
          comment={comment}
          user={user}
          comments={comments}
          setComments={setComments}
        />
      ))}
    </Container>
  );
};

export default GuestBook;
