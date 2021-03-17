import React from "react";
import { Container } from "./style";
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

const Loader = () => {
  return (
    <Container>
      <LottieView />
    </Container>
  );
};

export default Loader;
