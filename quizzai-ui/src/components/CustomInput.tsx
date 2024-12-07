import React, { ChangeEvent } from "react";

interface CustomInputProps {
  width?: number | string;
  height?: number | string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  className?: string;
  [key: string]: any;
}

const CustomInput: React.FC<CustomInputProps> = ({
  width = "100%",
  height = "100%",
  type = "text",
  placeholder = "",
  value,
  onChange,
  style = {},
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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
  );
};

export default CustomInput;
