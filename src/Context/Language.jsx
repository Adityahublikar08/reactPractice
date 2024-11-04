import { useContext } from "react";
import { Context } from "./LanguageContext";

function Language() {
  const { lang, setLang } = useContext(Context);
  const handleButton = () => {
    setLang(!lang);
  };
  return (
    <div>
      <h1>
        {lang ? "Hello, welcome to the app" : "नमस्ते, ऐप में आपका स्वागत है!"}
      </h1>
      <button onClick={() => handleButton()}>
        {lang ? "english" : "हिंदी"}
      </button>
    </div>
  );
}

export default Language;
