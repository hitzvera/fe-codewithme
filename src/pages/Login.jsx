import { useNavigate } from "react-router-dom";
import DescriptionLogin from "../components/moleculs/DescriptionLogin";
import FormLogin from "../components/organism/FormLogin";

export default function Login() {

    const navigate = useNavigate();

    const onSubmitHandler = () => {
        navigate('/home')
    }
    const onRegisterHandler = () => {
        navigate('/auth/register')
    }

    return <>
        <FormLogin onSubmitHandler={onSubmitHandler}/>
        <DescriptionLogin toRegisterHandler={onRegisterHandler}/>
    </>
}