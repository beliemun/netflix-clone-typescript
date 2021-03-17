import React, { SyntheticEvent, useState } from "react";
import { Container, Form, Input, Title, Description } from "./style";
import Base from "Components/Base";
import {} from "Components/Api";

const Search: React.FunctionComponent = () => {
  const [term, setTerm] = useState("");

  const searchByTerm = (term: string) => {
    console.log(term);
  };

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (term !== "") {
      searchByTerm(term);
      setTerm("");
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTerm(value);
  };

  return (
    <Container>
      <Title>Search</Title>
      <Description>
        Millions of movies, TV shows and people to discover. Explore now.
      </Description>
      <Form onSubmit={onSubmit}>
        <i className="fas fa-search"></i>
        <Input
          onChange={onChange}
          value={term}
          placeholder="Search by term"
        ></Input>
      </Form>
      <Base.GradientLine />
    </Container>
  );
};

export default Search;
