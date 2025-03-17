import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`p-4 rounded-xl ${theme === "light" ? "bg-gray-200" : "bg-gray-800 text-white"}`}>
      <p>Current Theme: {theme}</p>
      <button
        onClick={toggleTheme}
        className="mt-2 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        Toggle Theme
      </button>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex justify-center items-center h-screen">
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default App;
