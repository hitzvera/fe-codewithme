import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/organism/Cards';
import { getAllCourses } from '../redux/reducers/courses.slice';

export default function Courses() {
  const dispatch = useDispatch();
  dispatch(getAllCourses());
  const courses = useSelector((state) => state.courses.courses);

  return (
    <div className='p-8'>
      <Cards listCourses={courses} />
    </div>
  );
}
