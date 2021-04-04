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
  Form,
  Input,
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
  const [isEdting, setIsEditing] = useState(false);
  const [text, setText] = useState(comment.text);
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

  const deleteComment = () => {
    const isOkay = window.confirm("Do you want to delete this comment?");
    if (isOkay) {
      fs.doc(`comments/${comment.id}`)
        .delete()
        .then(() => {})
        .catch((e) => {
          console.log(e);
        });
    }
  };
  const toggleEditing = () =>
    setIsEditing((prev) => {
      setText(comment.text);
      return !prev;
    });
  const updateComment = () => {
    fs.doc(`comments/${comment.id}`).update({ text });
    toggleEditing();
  };

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
                    {!isEdting ? (
                      <>
                        <EditText onClick={toggleEditing} isEditing={isEdting}>
                          편집
                        </EditText>
                        |
                        <EditText onClick={deleteComment} isEditing={isEdting}>
                          삭제
                        </EditText>
                      </>
                    ) : (
                      <>
                        <EditText onClick={updateComment} isEditing={isEdting}>
                          완료
                        </EditText>
                        |
                        <EditText onClick={toggleEditing} isEditing={isEdting}>
                          취소
                        </EditText>
                      </>
                    )}
                  </>
                )}
              </EditContainer>
            </NameContainer>
            {!isEdting ? (
              <Message>{comment.text}</Message>
            ) : (
              <Input onChange={(e) => setText(e.target.value)} value={text} />
            )}
          </MessageContainer>
          <CreateAt>{getMomentFromNow(comment.createdAt)}</CreateAt>
        </>
      )}
    </Container>
  );
};

export default MessageItem;
