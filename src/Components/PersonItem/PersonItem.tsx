import React from "react";
import { Item, Poster, Detail } from "./style";

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
  known_for_department: string;
  profile_path: string;
}

interface IProps {
  person: IPerson;
  index: number;
}

const PersonItem: React.FunctionComponent<IProps> = ({ person, index }) => {
  return (
    <Item key={index} index={index} to={`/person/${person.id}`}>
      <Poster
        bgUrl={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
            : require("assets/no-image.jpg").default
        }
      />
      <Detail>{person.name}</Detail>
    </Item>
  );
};

export default PersonItem;
