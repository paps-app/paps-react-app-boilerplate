import React from "react";

import { HeaderStyled } from "./styles";

type ScrollPosition = {
  x: number;
  y: number;
};

export interface HeaderProps {
  name?: string;
  scrollPosition: ScrollPosition;
}

export const Header: React.FC<HeaderProps> = ({ name = "Paps", scrollPosition }) => {
  return (
    <HeaderStyled>
      <div>Hello Header, {name}</div>
      <div>
        Current scroll position: {scrollPosition.x}, {scrollPosition.y}
      </div>
    </HeaderStyled>
  );
};
