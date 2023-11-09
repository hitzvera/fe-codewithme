import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Text from "../../atoms/Text";
import { useNavigate } from "react-router-dom";

export default function TreeViewItem({ text, icon, currentPath, onClickHandler }) {


  return (
    <div onClick={onClickHandler} className={`flex items-center rounded gap-4 cursor-pointer text-black/70 px-2 py-4 hover:bg-slate-200 ${currentPath === text ? "bg-slate-200" : ""}`}>
      <FontAwesomeIcon icon={icon} className="text-sm" />
      <Text>{text}</Text>
    </div>
  );
}
