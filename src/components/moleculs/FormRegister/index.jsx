import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import IconsLogin from "../../moleculs/IconsLogin";
import { ButtonTypes, IndicatorTypes } from "../../../styles";
import Title from "../../atoms/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Indicator from "../../atoms/Indicator";
import Spinner from "../../atoms/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../../redux/services/auth.services";
export default function FormRegister() {

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const [showIndicator, setShowIndicator] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onRegisterSubmit = async (event) => {
    event.preventDefault();
    // dispatch(registerAction({ username, password }));
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        id: 1,
        username,
        password
      })
    })
  };

  return (
    <section className="font-poppins bg-white min-h-[500px] min-w-[400px] flex justify-center items-center">
      <div className="w-full px-4">
        <form onSubmit={onRegisterSubmit}>
          <Title
            customStyle={`w-full text-center text-3xl font-bold text-black/70`}
          >
            Register
          </Title>
          <div className="flex flex-col">
            <Input type="email" placeholder="Email" value={username} onChangeHandler={(e) => setUsername(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChangeHandler={(e) => setPassword(e.target.value)}/>
            <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChangeHandler={(e) => setConfirmPassword(e.target.value)} />
            <Button typeStyle={ButtonTypes.PRIMARY}>
              Register <Spinner isShown={loading} />
            </Button>
            <Indicator
              typeStyle={IndicatorTypes.SUCCESS}
              isShown={showIndicator}
            >
              Success
            </Indicator>
            <Text customStyle="text-center mt-4 text-black/50 text-sm mb-4">
              or Register with
            </Text>
            <IconsLogin />
          </div>
        </form>
      </div>
    </section>
  );
}
