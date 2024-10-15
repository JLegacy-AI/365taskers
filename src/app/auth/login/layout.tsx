"use client";
import React from "react";
import Image from "next/image";
import loginImage from "../../../assests/login.png";

const layout = ({ children }: any) => {
  return (
    <div>
      {/* Login Container */}
      <div
        style={{
          background: "#FBFFFA",
          width: "fixed(600px)",
          height: "fixed(673px)",
          padding: "20px 32px",
          position: "absolute",
          top: "175px",
          left: "97px",

          borderRadius: "8px 0px 0px 0px",
          opacity: 1,
          border: "1px solid #F0FEEB",
          boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)",
          zIndex: 1, // Added to ensure this container is below the image
        }}
      >
        {children}
      </div>

      {/* Image Container */}
      <div
        style={{
          width: "600px",
          height: "600px",
          position: "absolute",
          top: "212px",
          left: "772px",
          // padding: "212px 772px 0px 0px",
        }}
      >
        <Image
          src={loginImage}
          alt="login image"
          style={{
            width: "459.96px",
            height: "460.47px",
            padding: "70.4px 78.4px",
          }}
        />
      </div>
    </div>
  );
};

export default layout;
