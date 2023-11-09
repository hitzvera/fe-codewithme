import Title from "../../atoms/Title";
import TreeViewItems from "../../organism/TreeViewItems";
import NavigationHeader from "../../moleculs/NavigationHeader";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { ButtonTypes } from "../../../styles";

export default function HomeTemplate({ children }) {
  return (
    <div className="w-full min-h-screen flex">
      <div className="flex flex-1">
        <aside className="bg-slate-100/30 min-w-[300px] h-full text-xl text-black p-4 flex flex-col gap-4">
          <Title customStyle={"text-center"}>codewithme</Title>
          <TreeViewItems />
        </aside>
        <main className="w-full flex flex-1 flex-col">
          <NavigationHeader>
            <img
              src="/5907.jpg"
              alt="avatar profile"
              className="max-w-[25px] rounded-full"
            />
            <Text>username</Text>
            <Button typeStyle={ButtonTypes.DANGER}>Logout</Button>
          </NavigationHeader>
          {children}
        </main>
      </div>
    </div>
  );
}
