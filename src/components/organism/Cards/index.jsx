import { useNavigate } from "react-router-dom";
import Card from "../../moleculs/Card";
import { stringToSlug } from "../../../utils/utils";

const listCourses = [
  {
    id: 1,
    title: "Javascript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl:
      "https://academy.alterra.id/blog/wp-content/uploads/2021/07/Logo-Javascript.png",
  },
  {
    id: 2,
    title: "Java",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png",
  },
];

export default function Cards() {

  const navigate = useNavigate();

  return (
    <div className="flex gap-3">
      {listCourses.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          onClickHandler={() => navigate(`/course/${item.id}/${stringToSlug(item.title)}`)}
        />
      ))}
    </div>
  );
}
