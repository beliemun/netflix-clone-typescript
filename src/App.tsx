import React, { useEffect, useState } from "react";
import Router from "./Router";
import GlobalStyle from "Components/GlobalStyles";
import firebase from "firebase";
import { auth } from "fb";

const App = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
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
