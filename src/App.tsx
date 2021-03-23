import React from "react";
import Router from "./Router";
import GlobalStyle from "Components/GlobalStyles";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

const username = "burngrit@icloud.com";
const password = "qwer1234";
Auth.signIn(username, password)
  .then((success) => console.log(success))
  .catch((err) => console.log("err:", err));

// Auth.signUp({ username, password })
//   .then((success) => console.log("suc:", success))
//   .catch((err) => console.log("err:", err));

const App = () => (
  <>
    <Router />
    <GlobalStyle />
  </>
);

export default App;
