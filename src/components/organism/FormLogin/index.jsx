import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import IconsLogin from "../../moleculs/IconsLogin";
import { ButtonTypes } from "../../../styles";
import Title from "../../atoms/Title";
import Spinner from "../../atoms/Spinner";
export default function FormLogin({ onSubmitHandler }) {
  return (
    <section className="font-poppins bg-white min-h-[500px] min-w-[400px] flex justify-center items-center">
      <div className="w-full px-4">
        <form onSubmit={onSubmitHandler}>
          <Title
            customStyle={`w-full text-center text-3xl font-bold text-black/70`}
          >
            Sign in
          </Title>
          <div className="flex flex-col">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button typeStyle={ButtonTypes.PRIMARY}>Sign in <Spinner isShown={false} /></Button>
            <Text customStyle="text-center mt-4 text-black/50 text-sm mb-4">
              or Sign in with
            </Text>
            <IconsLogin />
          </div>
        </form>
      </div>
    </section>
  );
}
