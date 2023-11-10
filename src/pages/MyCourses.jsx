import Cards from "../components/organism/Cards";

const listCourses = [
  {
    id: 1,
    title: 'Javascript',
    buttonText: 'Belajar',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl:
      'https://academy.alterra.id/blog/wp-content/uploads/2021/07/Logo-Javascript.png',
      to_url: `/course/content/`
  },
];

export default function MyCourses() {
  return (
    <div className="p-4">
      <Cards listCourses={listCourses} />
    </div>
  );
}