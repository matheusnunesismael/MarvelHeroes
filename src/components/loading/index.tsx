import React from "react";
import ReactLoading from "react-loading";

import { LoadingWrapper } from "./styles";

const Loading: React.FC = () => {
  return (
    <LoadingWrapper>
      Searching ...
      <ReactLoading type={"bars"} color={"red"} height={80} width={80} />
    </LoadingWrapper>
  );
};

export default Loading;
