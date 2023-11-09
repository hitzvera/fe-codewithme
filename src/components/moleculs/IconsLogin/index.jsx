import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const listIcons = [faFacebook, faGoogle, faGithub];
export default function IconsLogin() {
  return (
    <div className="flex justify-center items-center gap-4">
      {listIcons.map((item, index) => (
        <div key={index} className="py-2 px-4 rounded-md bg-slate-100 cursor-pointer hover:bg-slate-200">
          <FontAwesomeIcon icon={item} />
        </div>
      ))}
    </div>
  );
}
