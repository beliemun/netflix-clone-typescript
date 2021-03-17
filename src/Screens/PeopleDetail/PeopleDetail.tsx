import React, { useEffect, useState } from "react";
import { BackDrop, BackDropCurtain } from "./style";
import { IPersonDetail, IVideo } from "types";
import { RouteComponentProps } from "react-router-dom";
import { peopleApi } from "Components/Api";
import { getRandomInt } from "functions/common";
import Base from "Components/Base";
import useScrollTop from "hooks/useScollTop";
import Loader from "Components/Loader";
import Footer from "Components/Footer";
import Detail from "./Detail";
import MovieCredit from "./MovieCredit";

interface IParamsProps {
  id: string;
}

const PeopleDetail: React.FunctionComponent<
  RouteComponentProps<IParamsProps>
> = ({
  match: {
    params: { id },
  },
}) => {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState<IPersonDetail | null>(null);
  const [movieCredit, setMovieCredit] = useState<IVideo[] | []>([]);
  const { elementRef, onClick } = useScrollTop();

  useEffect(() => {
    const loadPerson = async () => {
      try {
        setLoading(true);
        const { data } = await peopleApi.poepleDetail(id);
        setPerson(data);
        const {
          data: { cast: moiveCredit },
        } = await peopleApi.getMoiveCredits(id);
        setMovieCredit(moiveCredit);

        // Set fake loading time
        setTimeout(() => {
          setLoading(false);
        }, getRandomInt(500, 2000));
      } catch (e) {
        console.log(e);
      }
    };
    loadPerson();
  }, [id]);

  return loading ? (
    <Loader />
  ) : (
    <>
      {person && (
        <>
          <BackDrop
            bgUrl={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w342${person.profile_path}`
                : require("assets/no-image-person.png").default
            }
          >
            <BackDropCurtain />
          </BackDrop>
          <Detail person={person} />
          <MovieCredit
            videos={movieCredit}
            title={"Known For"}
            mediaType="movie"
          />
          <Footer />
          <Base.ScrollUpButton ref={elementRef} onClick={onClick}>
            <i className="fas fa-angle-double-up"></i>
          </Base.ScrollUpButton>
        </>
      )}
    </>
  );
};

export default PeopleDetail;
