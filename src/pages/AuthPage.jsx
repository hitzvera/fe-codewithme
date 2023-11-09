import AuthTemplate from "../components/template/AuthTemplate";
import { Outlet } from "react-router-dom";

export default function AuthPage() {
  return (
    <AuthTemplate>
      <Outlet />
    </AuthTemplate>
  )
}
