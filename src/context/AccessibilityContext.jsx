import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

const defaultAccessibility = {
  fontSize: 16,
  highContrast: false,
  readableFont: false,
};

const AccessibilityContext = createContext();

export const useAccessibility = () => useContext(AccessibilityContext);

const contrastTheme = {
  background: "#000",
  text: "#fff",
  card: "#111",
  primary: "#ffcc00",
};

export const AccessibilityProvider = ({ children, theme }) => {
  const [settings, setSettings] = useState(defaultAccessibility);

  const increaseFont = () =>
    setSettings((prev) => ({ ...prev, fontSize: prev.fontSize + 2 }));

  const decreaseFont = () =>
    setSettings((prev) => ({
      ...prev,
      fontSize: Math.max(12, prev.fontSize - 2),
    }));

  const toggleContrast = () =>
    setSettings((prev) => ({ ...prev, highContrast: !prev.highContrast }));

  const toggleFont = () =>
    setSettings((prev) => ({ ...prev, readableFont: !prev.readableFont }));

  const resetAccessibility = () => setSettings(defaultAccessibility);

  const mergedTheme = {
    ...theme,
    fontSize: `${settings.fontSize}px`,
    fontFamily: settings.readableFont ? "Arial, sans-serif" : "inherit",
    ...(settings.highContrast ? contrastTheme : {}),
  };

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        increaseFont,
        decreaseFont,
        toggleContrast,
        toggleFont,
        resetAccessibility,
      }}
    >
      <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>
    </AccessibilityContext.Provider>
  );
};
