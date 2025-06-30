// components/FlyingBoy.js
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./FlyingBoy.css";

const FlyingBoy = () => {
  return (
    <div className="flying-boy-bg">
      <DotLottieReact
        src="https://lottie.host/6c95f932-642f-4adb-93de-f3d2490a7b13/b0A5mRbC4E.lottie"
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default FlyingBoy;
