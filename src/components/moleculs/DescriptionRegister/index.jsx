import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import Title from "../../atoms/Title";

export default function DescriptionRegister({ onClickLogin }) {
  return (
    <section className="bg-gradient-to-br from-blue-400 to-blue-500 min-w-[400px] min-h-[500px] max-w-[500px] text-white flex flex-col justify-center items-center px-4">
      <Title customStyle="text-2xl">Welcome to Codewithme</Title>
      <Text customStyle="text-center my-4">
        we provide a platform to make you a great developer in the future. be a
        part for the better future
      </Text>
      <Button customStyle="bg-white/20 border-1 rounded-md border-white px-4 py-2 hover:bg-white/30" onClickHandler={onClickLogin}>
        Already have an account? Sign in
      </Button>
    </section>
  );
}
