import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import PeopleList from "Screens/PeopleList";
import PeopleDetail from "Screens/PeopleDetail";

const People: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <Switch>
      <Route path="/person" component={PeopleList} exact />
      <Route path="/person/:id" component={PeopleDetail} />
    </Switch>
  );
};

export default People;
