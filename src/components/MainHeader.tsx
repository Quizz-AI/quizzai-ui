import React from "react";
import ListIcon from "../assets/list.svg";
import LogoSecundaria from "../assets/LogoSecundaria.png";

interface MainHeaderProps {
  question?: boolean;
}

const MainHeader = (props: MainHeaderProps) => {
  const [isCLicked, setIsClicked] = React.useState(false);
  return (
    <header
      style={{
        display: "flex",
        padding: "3vh 3vw",
        justifyContent: "space-between",
        alignItems: "end",
      }}
    >
      {props.question && (
        <img
          src={LogoSecundaria}
          alt="Logo Secundaria"
          style={{
            width: "20vw",
            justifySelf: "flex-start",
          }}
        />
      )}
      <button
        style={{
          justifySelf: "flex-end",
          background: isCLicked ? "rgba(0,0,0,0.2)" : "transparent",
          border: "none",
          cursor: "pointer",
          borderRadius: "100%",
          transition: "background-color 0.3s ease",
          margin: 0,
          marginLeft: "auto",
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
