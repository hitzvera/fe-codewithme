import Cards from "../components/organism/Cards";

const listCourses = [
  {
    id: 1,
    type: "courses",
    title: 'Javascript',
    buttonText: 'Enroll',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl:
      'https://academy.alterra.id/blog/wp-content/uploads/2021/07/Logo-Javascript.png',
  },
  {
    id: 2,
    type: "courses",
    title: 'Java',
    buttonText: 'Enroll',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png',
  },
];
export default function Courses() {
  return (
    <div className="p-8">
      <Cards listCourses={listCourses} />
    </div>
  );
}
