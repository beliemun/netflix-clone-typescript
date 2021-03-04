import React, { useEffect, useState } from "react";
import { Container } from "./style";
import useScrollTop from "hooks/useScollTop";
import { RouteComponentProps } from "react-router-dom";
import Base from "Components/Base";
import ApiLoader from "Components/ApiLoader";
import PersonItem from "Components/PersonItem";
import CategoryHeader from "Components/CategoryHeader";
import { IPerson } from "types";

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
    <>
      <CategoryHeader
        current={"true"}
        title={"Popular People"}
        description={"The list of popular people. This list updates daily."}
      />
      <Container>
        {people.map((person, index) => (
          <PersonItem key={index} index={index} person={person} />
        ))}
        <Base.ScrollUpButton ref={elementRef} onClick={onClick}>
          <i className="fas fa-angle-double-up"></i>
        </Base.ScrollUpButton>
      </Container>
    </>
  );
};

export default PeopleList;
