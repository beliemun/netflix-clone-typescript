import React, { useEffect, useState } from "react";
import {
  Container,
  Poster,
  PosterWithPhoto,
  MessageContainer,
  Name,
  NameContainer,
  EditContainer,
  EditText,
  Message,
  CreateAt,
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
  const [author, setAuthor] = useState<IUser>();
  const [isEdting, setIsEditing] = useState(false);
  const [text, setText] = useState(comment.text);
  useEffect(() => {
    fs.doc(`users/${comment.creatorId}`)
      .get()
      .then((doc) => {
        const data = doc.data() as IUser;
        setAuthor({
          uid: data.uid,
          email: data.email,
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
    const confirm = window.confirm("Do you want to delete this comment?");
    if (confirm) {
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

  return author ? (
    <Container>
      {author.photoURL && author.photoURL !== "" ? (
        <Poster src={author.photoURL} />
      ) : (
        <>
          {author.gender && (
            <PosterWithPhoto gender={author.gender}>
              {author.gender === "Male" ? (
                <i className="fas fa-male" />
              ) : (
                <i className="fas fa-male" />
              )}
            </PosterWithPhoto>
          )}
        </>
      )}
      <MessageContainer>
        <NameContainer>
          <Name>
            {author.isAdmin && "👑"}
            {author.name === "" ? "(이름 없음)" : author.name}
          </Name>
          <EditContainer>
            {(author.uid === auth.currentUser?.uid || user?.isAdmin) && (
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
    </Container>
  ) : null;
};

export default MessageItem;
