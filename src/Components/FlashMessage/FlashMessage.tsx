import React from "react";
import { Container } from "./style";
import { AuthType } from "types";

interface IProps {
  authType: AuthType;
  text: string;
}

const FlashMessage: React.FunctionComponent<IProps> = ({ authType, text }) => (
  <Container authType={authType}>{text}</Container>
);

export default FlashMessage;
