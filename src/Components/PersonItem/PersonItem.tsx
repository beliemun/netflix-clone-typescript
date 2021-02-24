import React from "react";
import { Container } from "./style";

interface IKnowFor {
  id: string;
  title?: string;
  name?: string;
  poster_path: string | null;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  original_language: string;
  media_type: "movie" | "tv";
}

interface IPerson {
  id: number;
  name: string;
  know_for: Array<IKnowFor>;
}

interface IProps {
  person: IPerson;
  index: number;
}

const PersonItem: React.FunctionComponent<IProps> = ({ person, index }) => {
  return <Container>{person.name}</Container>;
};

export default PersonItem;
