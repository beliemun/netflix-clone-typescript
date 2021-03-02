import React from "react";
import { Container, Item, Title } from "./style";

interface IKeyword {
  id: string;
  name: string;
}

interface IProps {
  keywords: IKeyword[] | null;
}

const Keywords: React.FunctionComponent<IProps> = ({ keywords }) => (
  <>
    <Title>Quick search by Keywords</Title>
    <Container>
      {keywords &&
        keywords.map((keyword) => <Item to="#"># {keyword.name}</Item>)}
    </Container>
  </>
);

export default Keywords;
