import React, { useState, useEffect } from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import VideoList from "Screens/VideoList";
import { Container, Item, List } from "./style";
import VideoDetail from "Screens/VideoDetail";

const Movie: React.FunctionComponent<RouteComponentProps> = ({
  location: { pathname },
}) => {
  return (
    <Container>
      <List>
        <Item to="/movie" current={(pathname === "/movie").toString()}>
          Popular
        </Item>
        <Item
          to="/movie/now-playing"
          current={(pathname === "/movie/now-playing").toString()}
        >
          Now Playing
        </Item>
        <Item
          to="/movie/upcoming"
          current={(pathname === "/movie/upcoming").toString()}
        >
          Up Coming
        </Item>
        <Item
          to="/movie/top-rated"
          current={(pathname === "/movie/top-rated").toString()}
        >
          Top Rated
        </Item>
      </List>
      <Switch>
        <Route path="/movie" component={VideoList} exact />
        <Route path="/movie/now-playing" component={VideoList} exact />
        <Route path="/movie/upcoming" component={VideoList} />
        <Route path="/movie/top-rated" component={VideoList} />
        <Route path="/movie/:id" component={VideoDetail} />
      </Switch>
    </Container>
  );
};

export default Movie;
