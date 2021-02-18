import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

const VideoList: React.FunctionComponent<RouteComponentProps> = ({
  location: { pathname },
}) => {
  useEffect(() => {}, []);

  return <>VideoList : {pathname}</>;
};

export default VideoList;
