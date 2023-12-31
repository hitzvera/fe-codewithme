import {
  faBarsProgress,
  faNetworkWired,
  faPersonRifle,
} from "@fortawesome/free-solid-svg-icons";
import TreeViewItem from "../../moleculs/TreeViewItem";
import { useLocation, useNavigate } from "react-router-dom";
import { stringToSlug } from "../../../utils/utils";
const listTreeViewItems = [
  {
    id: 1,
    text: "courses",
    icon: faNetworkWired,
  },
  {
    id: 3,
    text: "my courses",
    icon: faBarsProgress,
  },
  {
    id: 2,
    text: "profile",
    icon: faPersonRifle,
  },
];

export default function TreeViewItems() {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[2];
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-2">
      {listTreeViewItems.map((item, index) => (
        <TreeViewItem
          key={index}
          text={item.text}
          icon={item.icon}
          currentPath={currentPath}
          onClickHandler={() => navigate(`/home/${stringToSlug(item.text)}`)}
        />
      ))}
    </div>
  );
}
