import React, { useEffect, useState } from "react";
import { movieApi } from "Components/Api";
import { Container } from "./style";
import { IGenre } from "types";

interface IProps {
  genre_ids: number[];
}

const Genres: React.FunctionComponent<IProps> = ({ genre_ids }) => {
  const [genreCodes, setGenreCodes] = useState<Array<IGenre>>([]);

  useEffect(() => {
    const LoadGenreCodes = async () => {
      try {
        const {
          data: { genres },
        } = await movieApi.getGenres();
        setGenreCodes(genres);
      } catch (e) {
        console.log(e);
      }
    };
    LoadGenreCodes();
  }, []);

  return (
    <Container>
      {genre_ids.map((video_genre_id: number, index: number) =>
        genreCodes.map((code: IGenre) =>
          code.id === video_genre_id
            ? genre_ids.length - 1 === index || genreCodes.length === 1
              ? code.name
              : code.name + " • "
            : ""
        )
      )}
    </Container>
  );
};

export default Genres;
