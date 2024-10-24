import SetaBaixo from "../assets/SetaBaixo.png";
import SetaCima from "../assets/SetaCima.png";
const QuestionChangeButton = (props: { position: "up" | "down" }) => {
  return (
    <button
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
      }}
    >
      <img
        src={props.position === "up" ? SetaCima : SetaBaixo}
        alt="Logo Secundaria"
        style={{ width: "1vw" }}
      />
    </button>
  );
};

export default QuestionChangeButton;
