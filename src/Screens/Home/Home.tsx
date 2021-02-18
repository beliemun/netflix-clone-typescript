import React, { useState, useEffect } from "react";
import { Route, RouteComponentProps, RouteProps } from "react-router-dom";
import { Container } from "./style";
import Loader from "Components/Loader";
import { moiveApi } from "Components/Api";

interface Popular {
  title: string;
}

const Home: React.FunctionComponent<RouteComponentProps> = () => {
  const [loading, setLoading] = useState(true);
  const [popular, setPopular] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [topRated, setTopRate] = useState([]);

  useEffect(() => {
    loadMoives();
  }, []);

  const loadMoives = async () => {
    try {
      setLoading(true);
      const {
        data: { results },
      } = await moiveApi.popluar();
      setPopular(results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return loading ? <Loader /> : <></>;
};

export default Home;
