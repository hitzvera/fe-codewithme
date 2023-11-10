import { Outlet, useNavigate } from 'react-router-dom';
import NavigationHeader from '../../moleculs/NavigationHeader';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import { ButtonTypes } from '../../../styles';
import Title from '../../atoms/Title';
import { useSelector } from 'react-redux';

export default function NavbarTemplate() {
  const navigate = useNavigate();

  const username = useSelector((state) => state.home.user.username);
  const courses = useSelector((state) => state.courses.courses);

  console.log(courses);

  return (
    <main className='w-full flex flex-col'>
      <NavigationHeader customStyle='justify-between'>
        <div className='cursor-pointer' onClick={() => navigate('/home')}>
          <Title>codewithme</Title>
        </div>
        <div className='flex items-center gap-4'>
          <img
            src='/5907.jpg'
            alt='avatar profile'
            className='max-w-[25px] rounded-full'
          />
          <Text customStyle='mr-8'>{username}</Text>
          <Button typeStyle={ButtonTypes.WARNING}>Logout</Button>
        </div>
      </NavigationHeader>
      <Outlet />
    </main>
  );
}
