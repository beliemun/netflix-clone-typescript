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
    {keywords && keywords.length > 0 && (
      <>
        <Title>Quick search by Keywords</Title>
        <Container>
          {keywords.map((keyword) => (
            <Item to="#"># {keyword.name}</Item>
          ))}
        </Container>
      </>
    )}
  </>
);

export default Keywords;
