import { useEffect, useState } from "react";
// use state is used for state management in website, konse button click, ya link click pr website kaise behave kregi. use state me hr baar website reload hoti hai
//use effect se particular actions pr re-render application, jisse ek toh loading duration, particular events pr re-render ke liye dependencies joh hm pass krte hai, dependency ka mtlab uss particular function call ya event hote hi use effect call hoga and joh hm andar instructions voh execute hoyenge
import axios from "axios";
// use state syntax:
// const/var/let [text,set text] = useState();
// useEffect(()=>{
//  instructions
//},[dependencies])
import lang from "../../languages";
import "../TranslatorFolder/Translator.css";
import backgroundVideo from "https://drive.google.com/file/d/1RgEbM8IiIgz2IyBi7aejt-mA01pqCraO/view?usp=sharing";

function Translator() {
  const [fromText, setFromText] = useState();
  const [toText, setToText] = useState();
  const [fromLanguage, setFromLanguage] = useState("en-GB");
  const [toLanguage, setToLanguage] = useState("es-ES");
  const [languages, setLanguages] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    setLanguages(lang);
  }, []);

  // const handleExchange = () => {
  //   let tempValue = fromText;
  //   setFromText(toText);
  //   setToText(tempValue);

  //   let tempLang = fromLanguage;
  //   setFromLanguage(toLanguage);
  //   setToLanguage(tempLang);
  // };
  const serverCall = (e) => {
    e.preventDefault();
    console.log(fromLanguage);
    console.log(fromText);
    console.log(toLanguage);
    console.log(toText);
    let data = {
      fromlanguage: fromLanguage,
      fromtranslation: fromText,
      tolanguage: toLanguage,
      totranslation: toText,
      date: currentDate
    };
    axios
      .post("http://127.0.0.1:3001/translationsData", data)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  const Translate = () => {
    setLoading(true);
    let url = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLanguage}|${toLanguage}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.responseData.translatedText);
        setToText(data.responseData.translatedText);
        setLoading(false);
      });
  };
  // const TranslateTo = ()=>{
  //     setLoading(true);
  //     let url = `https://api.mymemory.translated.net/get?q=${toText}&langpair=${toLanguage}|${toLanguage}`;

  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data.responseData.translatedText);
  //         setToText(data.responseData.translatedText);
  //         setLoading(false);
  //       });
  // }

  return (
    <>
      <div className="background-video">
        <video className="background-clip" autoPlay loop muted >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="container">
          <div className="wrapper">
            <div className="text-input">
              <textarea
                name="from"
                className="from-text"
                placeholder="Enter Text"
                id="from"
                value={fromText}
                onChange={(e) => {
                  setFromText(e.target.value);
                  if (e.target.value == "") {
                    setToText("");
                    return;
                  } else {
                    Translate();
                  }
                }}
              ></textarea>
              <textarea
                name="to"
                className="to-text"
                id="to"
                value={toText}
                readOnly
              ></textarea>
            </div>
            <ul className="controls">
              <li className="row from">
                <select className="fromLang"
                  value={fromLanguage}
                  onChange={(e) => {
                    setFromLanguage(e.target.value);
                  }}
                >
                  {Object.entries(languages).map(([code, name]) => (
                    <option key={code} value={code}>
                      {name}
                    </option>
                  ))}
                </select>
              </li>
              <li className="row to">
                <select className="toLang"
                  value={toLanguage}
                  onChange={(e) => {
                    setToLanguage(e.target.value);
                    Translate();
                  }}
                >
                  {Object.entries(languages).map(([code, name]) => (
                    <option key={code} value={code}>
                      {name}
                    </option>
                  ))}
                </select>
              </li>
            </ul>
            <div className="translate-btn">
            <button
              onClick={(e) => {
                Translate();
                console.log(e);
                serverCall(e);
                setCurrentDate(currentDate.getDate.toString())
              }}
              disabled={loading}
            >
              {loading ? "Translating" : "Save Translation"}
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Translator;
