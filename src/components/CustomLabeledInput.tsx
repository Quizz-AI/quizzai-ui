import React, { ChangeEvent } from "react";

interface CustomLabeledInputProps {
  id: string;
  label: string;
  width?: number | string;
  height?: number | string;
  type?: string;
  placeholder?: string;
  value?: string;
  callback?: (value: string) => void;
  style?: React.CSSProperties;
  className?: string;
  [key: string]: any;
}

const CustomLabeledInput: React.FC<CustomLabeledInputProps> = ({
  id,
  label,
  width = "100%",
  height = "100%",
  type = "text",
  placeholder = "",
  value,
  callback,
  style = {},
  className = "",
  ...props
}) => {

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1vw", textWrap: "wrap"}} >
        <label htmlFor={id} style={{ fontWeight: "bold", fontSize: "1.3rem", color: "white", textWrap: "wrap", width: "5vw" }} >{label}</label>
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => callback && callback(e.target.value)}
            style={{
                backgroundColor: "transparent",
                borderRadius: "3rem",
                borderColor: "white",
                borderStyle: "solid",
                borderWidth: "0.1rem",
                outline: "none",
                fontSize: "150%",
                padding: "0.5rem 2rem",
                color: "white",
                fontWeight: 400,
                fontFamily: "inherit",
                ...style,
            }}
            className={`custom-input ${className}`}
            {...props} // repassa qualquer outro prop para o elemento <input>
        />
    </div>
    
  );
};

export default CustomLabeledInput;
