import { useNavigate } from "react-router-dom";
import Card from "../../moleculs/Card";
import { stringToSlug } from "../../../utils/utils";

export default function Cards({ listCourses }) {

  const navigate = useNavigate();

  function onClickHandler(item) {
    if(item.type === 'courses') {
      return navigate(`/course/${item.id}/${stringToSlug(item.title)}`);
    } 
    return navigate(`/course/content/${stringToSlug(item.title)}`);
  }

  return (
    <div className="flex gap-3">
      {listCourses.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          buttonText={item.buttonText}
          onClickHandler={() => onClickHandler(item)}
        />
      ))}
    </div>
  );
}
