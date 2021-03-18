import React from "react";
import { Container } from "./style";
import PersonItem from "Components/PersonItem";
import { IPerson } from "types";

interface IProps {
  people: IPerson[];
}

const List: React.FunctionComponent<IProps> = ({ people }) => {
  return (
    <Container>
      {people.map((person, index) => (
        <PersonItem key={index} index={index} person={person} />
      ))}
    </Container>
  );
};

export default List;
