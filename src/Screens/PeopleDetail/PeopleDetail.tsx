import React, { useEffect, useState } from "react";
import { BackDrop, BackDropCurtain, Container } from "./style";
import { IPersonDetail } from "types";
import { RouteComponentProps } from "react-router-dom";
import { peopleApi } from "Components/Api";
import useScrollTop from "hooks/useScollTop";
import Loader from "Components/Loader";
import Footer from "Components/Footer";
import Detail from "./Detail";

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
  const { elementRef, onClick } = useScrollTop();

  useEffect(() => {
    const loadPerson = async () => {
      try {
        setLoading(true);
        const { data } = await peopleApi.poepleDetail(id);
        setPerson(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    loadPerson();
  }, []);

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
          <Container>
            <Detail person={person} />
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export default PeopleDetail;
