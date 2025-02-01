import React, { CSSProperties } from "react";

const StyledFonts = ({
  text,
  fontSize = "inherit",
  color,
  className = "",
  fontFamily,
}: {
  text: string;
  className?: string;
  fontSize?: string;
  color: string;
  fontFamily: string;
}) => {
  const style: CSSProperties = {
    fontFamily,
    fontWeight: 400,
    fontSize,
    color,
    lineHeight: "1.5rem",
    letterSpacing: "0.00938em",
  };
  return (
    <span
      className={`${className}`}
      style={{ ...style }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default StyledFonts;
