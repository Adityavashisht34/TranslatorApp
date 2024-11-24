import React from "react";
import Layout from "./Layout";
import "./index.css";
import {Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements} from "react-router-dom"
import ReactDOM from "react-dom/client";
import Translator from "./components/TranslatorFolder/Translator";
import LetsTranslate from "./components/LetsTranslate/LetsTranslateMain";
import Team from "./components/About/Team";
import History from "./components/History/History"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<LetsTranslate />} />
      <Route path="/translatorapp" element={<Translator />} />
      <Route path="/team" element={<Team />} />
      <Route path="/history" element={<History/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
