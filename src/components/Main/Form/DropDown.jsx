import React from "react";
import * as S from "../../input";
import { useState } from "react";
import { useEffect } from "react";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

const Dropdown = ({ placeHolder, options }) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handler = () => setShowMenu(false);
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  });
  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  return (
    <S.DropContainer>
      <S.DropInput onClick={handleInputClick()}>
        {showMenu && (
          <S.DropMenu>
            {options.map((option) => (
              <S.DropMenu key={option.value}>{option.label}</S.DropMenu>
            ))}
          </S.DropMenu>
        )}
      </S.DropInput>
    </S.DropContainer>
  );
};

export default Dropdown;
