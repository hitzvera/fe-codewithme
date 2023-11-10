import Title from '../../atoms/Title';
import TreeViewItems from '../../organism/TreeViewItems';
import NavigationHeader from '../../moleculs/NavigationHeader';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import { ButtonTypes } from '../../../styles';
import { useSelector } from 'react-redux';

export default function HomeTemplate({ children }) {
  const user = useSelector((state) => state.home.user);

  return (
    <div className='w-full max-h-screen flex'>
      <div className='flex flex-1'>
        <aside className='bg-slate-100/30 min-w-[300px] h-[100vh] text-xl text-black p-4 flex flex-col gap-4'>
          <Title customStyle={'text-center'}>codewithme</Title>
          <TreeViewItems />
        </aside>
        <main className='w-full flex flex-1 flex-col'>
          <NavigationHeader>
            <img
              src='/5907.jpg'
              alt='avatar profile'
              className='max-w-[25px] rounded-full'
            />
            <Text>{user.username}</Text>
            <Button typeStyle={ButtonTypes.WARNING}>Logout</Button>
          </NavigationHeader>
          <div className='overflow-y-auto h-[100vh]'>{children}</div>
        </main>
      </div>
    </div>
  );
}
