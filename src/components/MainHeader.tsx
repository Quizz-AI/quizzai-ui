import React from "react";
import ListIcon from "../assets/list.svg";

const MainHeader = () => {
  const [isCLicked, setIsClicked] = React.useState(false);
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "right",
        padding: "4vh 3vw",
      }}
    >
      <button
        style={{
          justifySelf: "flex-end",
          background: isCLicked ? "rgba(0,0,0,0.2)" : "transparent",
          border: "none",
          cursor: "pointer",
          borderRadius: "100%",
          transition: "background-color 0.3s ease",
          margin: 0,
          padding: "0.5vh 0.5vw",
        }}
        onClick={() => setIsClicked(!isCLicked)}
        onBlur={() => setIsClicked(false)}
        onMouseEnter={(e) => {
          if (!isCLicked)
            e.currentTarget.style.backgroundColor = "rgba(0,0,0, 0.1)";
        }}
        onMouseLeave={(e) => {
          if (!isCLicked) e.currentTarget.style.backgroundColor = "transparent";
        }}
      >
        <img src={ListIcon} alt="Menu" />
      </button>
    </header>
  );
};

export default MainHeader;
