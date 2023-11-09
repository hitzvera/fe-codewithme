import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Card({ imageUrl, title, description, onClickHandler }) {
  return (
    <figure className=" cursor-pointer flex-1 max-h-[500px]" onClick={onClickHandler}>
      <div className="w-full border-x-2 border-t-2 rounded flex justify-center">
        <img src={imageUrl} alt="card image" className="max-h-[100px]" />
      </div>
      <div className="flex flex-col justify-between border-2 max-h-[250px] h-full rounded-br rounded-bl">
        <div className="px-4 py-2">
          <Title>{title}</Title>
          <Text customStyle={"text-sm line-clamp-4 overflow-hidden"}>{description}</Text>
        </div>
        <div>
          <div className="flex justify-between px-4 ">
            <div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faChartSimple}
                  className="text-slate-500"
                />
                <p className="font-semibold">Begineer</p>
              </div>
              <div>Rp. 50.000</div>
            </div>

            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <p>5.0</p>
            </div>
          </div>
          <Button customStyle={"w-full bg-slate-100 py-2"}>Enroll</Button>
        </div>
      </div>
    </figure>
  );
}
