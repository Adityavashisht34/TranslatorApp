import { useEffect, useState } from "react";
import axios from "axios";
import lang from "../../languages";
import "../../styles/Translator.css";
import backgroundVideo from "../../assets/backgroundvideo.mp4";
import Header from "../Header/Header";

function Translator() {
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [fromLanguage, setFromLanguage] = useState("en-GB");
  const [toLanguage, setToLanguage] = useState("es-ES");
  const [languages, setLanguages] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [translations, setTranslations] = useState([]); // State to hold user's translations

  useEffect(() => {
    setLanguages(lang);
    Translations(); // Fetch user's translations on component mount
  }, []);

  const  Translations = () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      axios.get(`http://127.0.0.1:3001/userTranslations/${userId}`)
        .then(response => {
          setTranslations(response.data); // Set the translations state
        })
        .catch(err => console.error(err));
    }
  };

  const serverCall = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error("User  ID is null. Please log in.");
      return;
    }

    let data = {
      userId,
      fromlanguage: fromLanguage,
      fromtranslation: fromText,
      tolanguage: toLanguage,
      totranslation: toText,
      date: new Date().toLocaleString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata',
      }),
    };

    axios.post("http://127.0.0.1:3001/translationsDataMain", data)
      .then(() => {
        Translations(); // Refresh translations after saving
        setFromText(""); // Clear input fields
        setToText("");
      })
      .catch(err => console.log(err));
  };

  const Translate = () => {
    setLoading(true);
    let url = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLanguage}|${toLanguage}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToText(data.responseData.translatedText);
        setLoading(false);
      });
  };

  return (
    <>
      <Header />
      <div className="background-video">
        <video className="background-clip" autoPlay loop muted>
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
                  if (e.target.value === "") {
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
              <li className="row submit">
                <button onClick={serverCall}>Save Translation</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Translator;