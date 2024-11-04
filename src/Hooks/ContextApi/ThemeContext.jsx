import { createContext, useState, use } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const Theme = () => {
  const { theme, handleTheme } = use(ThemeContext);
  return (
    <div className={theme ? "bg-slate-400" : "bg-white"} style={{height:"500px",width:"500px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center',border:"1px solid black",gap:"20px"}}>
      <h1>Hello welcome To Theme Toggler</h1>
      <h2>Switch to {!theme ? "dark" : "light"}</h2>
      <button onClick={handleTheme} className="border-2 bg-red-600 p-3 text-center text-emerald-500">
        {theme ? "dark Mode" : "Light mode"}
      </button>
    </div>
  );
};
