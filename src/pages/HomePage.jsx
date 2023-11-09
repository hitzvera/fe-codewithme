import HomeTemplate from "../components/template/HomeTemplate";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <HomeTemplate>
      <Outlet />
    </HomeTemplate>
  );
}
