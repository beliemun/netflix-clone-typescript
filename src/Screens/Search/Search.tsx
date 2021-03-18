import React, { SyntheticEvent, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import {
  Container,
  Form,
  Input,
  Title,
  Description,
  MenuContainer,
  MenuItem,
} from "./style";
import Base from "Components/Base";
import ApiSearchParser from "Components/ApiSearchParser";
import { MediaType, IVideo, IPerson } from "types";
import VideoList from "Screens/VideoList/List";
import PeopleList from "Screens/PeopleList/List";
import useScrollTop from "hooks/useScollTop";

const Search: React.FunctionComponent<RouteComponentProps> = (props) => {
  const [term, setTerm] = useState("");
  const [videos, setVideos] = useState<Array<IVideo>>([]);
  const [people, setPeople] = useState<Array<IPerson>>([]);
  const [mediaType, setMediaType] = useState<MediaType>("movie");
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const { elementRef, onClick } = useScrollTop();

  useEffect(() => {
    const checkTouchBottom = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight * 0.7 && !loading) {
        searchByTerm(term, page + 1);
      }
    };

    document.addEventListener("scroll", checkTouchBottom);
    return () => document.removeEventListener("scroll", checkTouchBottom);
  }, [term]);

  useEffect(() => {
    setVideos([]);
    setPeople([]);
    setPage(1);
  }, [term]);

  useEffect(() => {
    if (term !== "") {
      setVideos([]);
      setPeople([]);
      setPage(1);
      searchByTerm(term, page);
    }
  }, [mediaType]);

  const searchByTerm = async (term: string, page: number) => {
    try {
      const {
        data: { results },
      } = await ApiSearchParser(mediaType, page, term);
      if (page === 1) {
        if (mediaType === "movie" || mediaType === "tv") {
          setVideos(results);
        } else if (mediaType === "person") {
          setPeople(results);
        }
      } else {
        if (mediaType === "movie" || mediaType === "tv") {
          setVideos((prev) => prev.concat(results));
        } else if (mediaType === "person") {
          setPeople((prev) => prev.concat(results));
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
      setPage(page);
      setLoading(false);
    }
  };

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (term !== "") {
      searchByTerm(term, page);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTerm(value);
  };

  type MenuItemType = {
    mediaType: MediaType;
    title: string;
  };

  const Menu = () => {
    const items: MenuItemType[] = [
      {
        mediaType: "movie",
        title: "Movies",
      },
      {
        mediaType: "tv",
        title: "Tv Shows",
      },
      {
        mediaType: "person",
        title: "People",
      },
    ];

    const onClick = (mediaType: MediaType) => {
      setMediaType(mediaType);
    };

    return (
      <MenuContainer>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            current={mediaType === item.mediaType}
            onClick={() => onClick(item.mediaType)}
          >
            {item.title}
          </MenuItem>
        ))}
      </MenuContainer>
    );
  };

  return (
    <>
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
      <Menu />
      {videos.length > 0 && <VideoList videos={videos} mediaType="movie" />}
      {people.length > 0 && <PeopleList people={people} />}
      <Base.ScrollUpButton ref={elementRef} onClick={onClick}>
        <i className="fas fa-angle-double-up"></i>
      </Base.ScrollUpButton>
    </>
  );
};

export default Search;
