import React, { CSSProperties } from "react";

const StyledFonts = ({
  text,
  fontSize = "inherit",
  color,
  fontFamily,
}: {
  text: string;
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
    <span style={{ ...style }} dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export default StyledFonts;
