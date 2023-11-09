import DescriptionRegister from "../components/moleculs/DescriptionRegister";
import FormRegister from "../components/moleculs/FormRegister";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  // move page to login
  const onClickLogin = () => {
    navigate("/auth/login");
  };

  return (
    <>
      <DescriptionRegister onClickLogin={onClickLogin} />
      <FormRegister />
    </>
  );
}
