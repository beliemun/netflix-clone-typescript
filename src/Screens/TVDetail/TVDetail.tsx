import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Contaniner } from "./style";
import {} from "Components/Api";

interface IParamsProps {
  id: string;
}

const MovieDetail: React.FunctionComponent<
  RouteComponentProps<IParamsProps>
> = ({
  match: {
    params: { id },
  },
}) => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadMovie = async () => {
      try {
      } catch (e) {
        console.log(e);
      } finally {
      }
    };

    loadMovie();
  }, []);

  return <Contaniner>{`TVDetail : ${id}`}</Contaniner>;
};

export default MovieDetail;
