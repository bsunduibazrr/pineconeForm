"use client";
import Image from "next/image";

export const StepFour = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "250px",
      }}
    >
      <div className="header2">
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <img className="logo" src="/logo.png" alt="logo" />
          <p className="text">You are All Set!🔥</p>
          <p className="text2">We have received your submission. Thank you!</p>
        </div>
      </div>
    </div>
  );
};
