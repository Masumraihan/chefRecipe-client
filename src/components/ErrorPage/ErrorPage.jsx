import { Controls, Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const {error,status} = useRouteError()
  return (
    <div>
      <Player
        autoplay
        loop
        src='https://assets10.lottiefiles.com/packages/lf20_bhw1ul4g.json'
        style={{ height: "300px", width: "300px" }}
      ></Player>
        <p className="text-center text-red-400 text-xl">{error?.message}</p>
    </div>
  );
};

export default ErrorPage;
