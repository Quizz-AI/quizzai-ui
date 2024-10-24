import React from "react";
import { MainHeader } from "../components";
import { QuestionChangeButton } from "../components";

const QuestionPage = () => {
  return (
    <div
      style={{
        background: "#1E1E1E",
        display: "flex",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <MainHeader question />
      <div
        style={{ width: "100vw", height: "0.5vh", backgroundColor: "#56106D" }}
      ></div>
      <div
        style={{
          display: "flex",
          height: "auto",
          alignSelf: "center",
          color: "white",
          marginTop: "10vh",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "5vh" }}>
          <h4 style={{ color: "white", margin: 0 }}>Question</h4>
          <textarea
            maxLength={500}
            placeholder="Write your answer here..."
            style={{
              background: "#d9d9d90f",
              border: "none",
              width: "50vw",
              height: "40vh",
              resize: "none",
              borderRadius: "10vh",
              color: "white",
              outline: "none",
              padding: "5vh 4vw",
              fontSize: "1.5vw",
            }}
            typeof="text"
          ></textarea>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5vh",
            marginLeft: "5vw",
            justifyContent: "space-between",
          }}
        >
          <QuestionChangeButton position="up" />
          <QuestionChangeButton position="down" />
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
