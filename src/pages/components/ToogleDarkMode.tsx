import React from "react";
import { Switch } from "@material-ui/core";
import useDarkMode from "pages/utils/hooks/useDarkMode";

const ToogleDarkMode: React.FC = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const handleToogleMode = () => {
    setTheme(colorTheme);
  };

  return <Switch {...label} color="default" onClick={handleToogleMode} />;
};

export default ToogleDarkMode;
