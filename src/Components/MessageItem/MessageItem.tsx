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
import { auth, db } from "fb";
import { getMomentFromNow } from "functions/moment";

interface IProps {
  comment: IComment;
  user: IUser | null;
  comments: IComment[];
  setComments: (comment: React.SetStateAction<IComment[]>) => void;
}

const MessageItem: React.FunctionComponent<IProps> = ({
  comment,
  user,
  comments,
  setComments,
}) => {
  const [author, setAuthor] = useState<IUser>();
  const [isEdting, setIsEditing] = useState(false);
  const [text, setText] = useState(comment.text);
  useEffect(() => {
    db.doc(`users/${comment.creatorId}`)
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
          provider: data.provider,
          latestPostTime: data.latestPostTime,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const deleteComment = () => {
    const confirm = window.confirm("Do you want to delete this comment?");
    if (confirm) {
      // 1. db를 먼저 삭제하고
      db.doc(`comments/${comment.id}`)
        .delete()
        .then(() => {
          // 2. 배열에서 삭제하여 화면 갱신
          setComments((prev) => prev.filter((e) => e.id !== comment.id));
        })
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
    // 1. db를 먼저 업데이트 하고
    db.doc(`comments/${comment.id}`)
      .update({ text })
      .then(() => {
        toggleEditing();
        // 2-1. 갱신된 코멘트를 만들어서
        const updatedComment = {
          id: comment.id,
          text: text,
          createdAt: comment.createdAt,
          creatorId: comment.creatorId,
        };
        // 2-2. 배열 요소를 변경시켜주고 업데이트 한다.
        const filteredComments = comments.map((comment) => {
          if (comment.id === updatedComment.id) {
            return updatedComment;
          } else {
            return comment;
          }
        });
        setComments(filteredComments);
      });
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
          <Name isAdmin={author.isAdmin}>
            {author.isAdmin && <span>👑</span>}
            {author.name === "" ? "(이름 없음)" : author.name}
            {author.provider === "google" && <i className="fab fa-google" />}
            {author.provider === "github" && <i className="fab fa-github" />}
            {author.provider === "email" && <i className="far fa-envelope" />}
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
        {!isEdting || !user ? (
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
