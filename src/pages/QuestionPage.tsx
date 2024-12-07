import React from "react";
import { MainHeader } from "../components";
import { QuestionChangeButton } from "../components";

const QuestionPage = () => {
  const [hasText, setHasText] = React.useState(false);
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
          marginTop: "5vh",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "5vh" }}>
          <h4 style={{ color: "white", margin: 0 }}>Question</h4>
          <textarea
            maxLength={500}
            placeholder="Write your answer here..."
            onChange={(e) => setHasText(e.target.value.length > 0)}
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
              fontFamily: "inherit",
            }}
            typeof="text"
          ></textarea>
          <button
            style={{
              background: hasText
                ? "linear-gradient(to right, #A852C3, #56106D)"
                : "rgba(255, 255, 255, 0.1)",
              color: hasText ? "white" : "rgba(255, 255, 255, 0.5)",
              fontSize: "2vw",
              border: "none",
              borderRadius: "5vh",
              width: "15vw",
              height: "7vh",
              alignSelf: "center",
              fontFamily: "inherit",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
              cursor: hasText ? "pointer" : "not-allowed",
            }}
          >
            Submit
          </button>
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
