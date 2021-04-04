import React, { useEffect, useState } from "react";
import {
  Container,
  Poster,
  MessageContainer,
  Name,
  NameContainer,
  EditContainer,
  EditText,
  Message,
  CreateAt,
} from "./style";
import { IComment, IUser } from "types";
import { auth, fs } from "fb";
import { getMomentFromNow } from "functions/moment";

interface IProps {
  comment: IComment;
  user: IUser | null;
}

const MessageItem: React.FunctionComponent<IProps> = ({ comment, user }) => {
  const [athor, setAthor] = useState<IUser>();
  useEffect(() => {
    fs.doc(`users/${comment.creatorId}`)
      .get()
      .then((doc) => {
        const data = doc.data() as IUser;
        setAthor({
          uid: data.uid,
          name: data.name,
          gender: data.gender,
          createdAt: data.createdAt,
          photoURL: data.photoURL,
          isAdmin: data.isAdmin,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <Container>
      {athor && (
        <>
          <Poster src={athor.photoURL} />
          <MessageContainer>
            <NameContainer>
              <Name>{athor.name === "" ? "(이름 없음)" : athor.name}</Name>
              <EditContainer>
                {(athor.uid === auth.currentUser?.uid || user?.isAdmin) && (
                  <>
                    <EditText>편집</EditText>|<EditText>삭제</EditText>
                  </>
                )}
              </EditContainer>
            </NameContainer>
            <Message>{comment.text}</Message>
          </MessageContainer>
          <CreateAt>{getMomentFromNow(comment.createdAt)}</CreateAt>
        </>
      )}
    </Container>
  );
};

export default MessageItem;
