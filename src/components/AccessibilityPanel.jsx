import React, { useState } from "react";
import { useAccessibility } from "../context/AccessibilityContext";
import styled from "styled-components";

import {
  FaPlus,
  FaMinus,
  FaUndo,
  FaEye,
  FaFont,
  FaUniversalAccess,
  FaSun,
} from "react-icons/fa";

const Wrapper = styled.div`
  margin-top: auto;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 26px;
  color: white;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const PanelWrapper = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #111;
  border-radius: 10px;
`;
const iconStyle = {
  marginRight: "10px",
  color: "#e50914",
};
const Button = styled.button`
  padding: 10px 15px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  background-color: #444;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
  text-align: left;
  width: 100%;

  &:hover {
    background-color: #666;
  }
`;

const AccessibilityPanel = ({ toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const {
    increaseFont,
    decreaseFont,
    toggleContrast,
    toggleFont,
    resetAccessibility,
  } = useAccessibility();

  return (
    <Wrapper>
      <Button onClick={toggleTheme}>
        🌓 Toggle Theme <FaSun style={{ iconStyle }} />
      </Button>

      <ToggleButton onClick={() => setOpen((prev) => !prev)}>
        <FaUniversalAccess />
      </ToggleButton>

      {open && (
        <PanelWrapper>
          <Button onClick={increaseFont}>
            <FaPlus /> הגדלת טקסט
          </Button>
          <Button onClick={decreaseFont}>
            <FaMinus /> הקטנת טקסט
          </Button>
          <Button onClick={toggleContrast}>
            <FaEye /> ניגודיות גבוהה
          </Button>
          <Button onClick={toggleFont}>
            <FaFont /> פונט קריא
          </Button>
          <Button onClick={resetAccessibility}>
            <FaUndo /> איפוס הגדרות
          </Button>
        </PanelWrapper>
      )}
    </Wrapper>
  );
};

export default AccessibilityPanel;
