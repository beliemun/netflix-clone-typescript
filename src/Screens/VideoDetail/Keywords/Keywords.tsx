import React from "react";
import { Container, Item, Title } from "./style";
import { IKeyword } from "types";

interface IProps {
  keywords: IKeyword[] | null;
}

const Keywords: React.FunctionComponent<IProps> = ({ keywords }) => (
  <>
    {keywords && keywords.length > 0 && (
      <>
        <Title>Quick search by Keywords</Title>
        <Container>
          {keywords
            .filter((_, i) => i < 12)
            .map((keyword, index) => (
              <Item to="#" key={index}>
                # {keyword.name}
              </Item>
            ))}
        </Container>
      </>
    )}
  </>
);

export default Keywords;
