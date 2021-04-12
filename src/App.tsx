import React, { useEffect, useState } from "react";
import Router from "./Router";
import GlobalStyle from "Components/GlobalStyles";
import { auth, db } from "fb";
import { IUser } from "types";

const App = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.doc(`users/${user.uid}`)
          .get()
          .then((doc) => {
            const data = doc.data() as IUser;
            setUser({
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
          });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <Router user={user} />
      <GlobalStyle />
    </>
  );
};

export default App;
