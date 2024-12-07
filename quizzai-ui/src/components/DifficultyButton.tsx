interface DifficultyButtonProps {
  difficulty: string;
  setDifficulty: () => void;
  isToggled: boolean;
  [key: string]: any;
}

const DifficultyButton: React.FC<DifficultyButtonProps> = ({
  difficulty,
  setDifficulty,
  isToggled,
  ...props
}) => {
  return (
    <button
      onClick={setDifficulty}
      style={{
        backgroundColor: isToggled ? "#56106D" : "transparent",
        color: "white",
        borderRadius: "3rem",
        border: "none",
        padding: "0.5rem 2rem",
        fontSize: "150%",
        fontWeight: 400,
        fontFamily: "inherit",
        cursor: "pointer",
        outline: "none",
        transition: "250ms",
      }}
      {...props}
    >
      {difficulty}
    </button>
  );
};

export default DifficultyButton;
