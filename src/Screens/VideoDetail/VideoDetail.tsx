import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface IParamsProps {
  id: string;
}

const VideoDetail: React.FunctionComponent<
  RouteComponentProps<IParamsProps>
> = ({
  match: {
    params: { id },
  },
}) => {
  return <>{id}</>;
};

export default VideoDetail;
