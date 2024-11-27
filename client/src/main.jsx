import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./styles/index.css";
import Translator from "./components/TranslatorFolder/Translator";
import LetsTranslateMain from "./components/LetsTranslate/LetsTranslateMain";
import Team from "./components/About/Team";
import History from "./components/History/History";
import Layout from "./Layout"


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<LetsTranslateMain />} />
       <Route path="/translatorapp" element={<Translator />} />
      <Route path="/team" element={<Team />} />
      <Route path="/history" element={<History />} /> 
     </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
