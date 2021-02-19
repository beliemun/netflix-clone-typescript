import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import {} from "./style";
import Loader from "Components/Loader";

const Home: React.FunctionComponent<RouteComponentProps> = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMoives();
  }, []);

  const loadMoives = async () => {
    try {
      setLoading(true);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return loading ? <Loader /> : <></>;
};

export default Home;
