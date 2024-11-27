import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import "./styles/index.css"

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
