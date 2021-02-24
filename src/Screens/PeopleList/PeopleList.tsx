import React, { useEffect, useState } from "react";
import { Container } from "./style";
import useScrollTop from "hooks/useScollTop";
import { RouteComponentProps } from "react-router-dom";
import Base from "Components/Base";
import ApiLoader from "Components/ApiLoader";
import PersonItem from "Components/PersonItem";

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

const PeopleList: React.FunctionComponent<RouteComponentProps> = ({
  location: { pathname },
}) => {
  const [people, setPeople] = useState<Array<IPerson>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const { elementRef, onClick } = useScrollTop();

  useEffect(() => {
    const LoadPeople = async (page: number) => {
      try {
        setLoading(true);
        const {
          data: { results },
        } = await ApiLoader(pathname, page);
        console.log(results);
        setPeople((prev) => prev.concat(results));
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
        setPage(page);
      }
    };

    const checkTouchBottom = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight * 0.7 && !loading) {
        LoadPeople(page + 1);
      }
    };

    if (people.length === 0) checkTouchBottom();
    document.addEventListener("scroll", checkTouchBottom);
    return () => document.removeEventListener("scroll", checkTouchBottom);
  }, [pathname, page, loading, people]);

  useEffect(() => {
    setPeople([]);
    setPage(0);
  }, [pathname]);

  return (
    <Container>
      {people.map((person, index) => (
        <PersonItem key={index} index={index} person={person} />
      ))}
      <Base.ScrollUpButton ref={elementRef} onClick={onClick}>
        <i className="fas fa-angle-double-up"></i>
      </Base.ScrollUpButton>
    </Container>
  );
};

export default PeopleList;
