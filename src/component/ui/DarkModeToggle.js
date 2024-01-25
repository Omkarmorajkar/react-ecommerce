import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const DarkModeToggle = () => {
  localStorage.clear();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check user's preference from local storage
    const storedDarkMode = localStorage.getItem("darkMode");
    setIsDarkMode(storedDarkMode === "true");
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <div onClick={toggleDarkMode} className="cursor-pointer">
      <FontAwesomeIcon
        icon={faCircleHalfStroke}
        color={isDarkMode ? "white" : "black"}
      />
    </div>
  );
};

export default DarkModeToggle;
