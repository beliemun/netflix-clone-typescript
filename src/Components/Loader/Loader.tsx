import React from "react";
import { Container, Title } from "./style";
import { useLottie } from "lottie-react";
import data from "Components/Lottie";

const LottieView = () => {
  const style = { height: 100 };
  const options = {
    animationData: data.Loader,
    loop: true,
    autoplay: true,
  };
  const Lottie = useLottie(options, style);
  Lottie.setSpeed(2);

  return Lottie.View;
};

interface Props {
  message?: string;
}
const Loader: React.FunctionComponent<Props> = ({ message }) => {
  return (
    <Container>
      <LottieView />
      {message && <Title>{message}</Title>}
    </Container>
  );
};

export default Loader;
