import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import "./index.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
