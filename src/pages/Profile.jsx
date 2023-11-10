import Title from '../components/atoms/Title';
import Text from '../components/atoms/Text';
export default function Profile() {
  return (
    <div className='p-4'>
      <Title customStyle={'text-2xl'}>Completion</Title>
      <div className='mt-8 flex border-2 gap-4'>
        <img
          src='/avatar-profile.jpg'
          alt='avatar profile'
          className='rounded max-w-[150px]'
        />
        <div className='flex flex-col justify-between'>
          <div>
            <Title>Mujahid Ansori Majid</Title>
            <Text>Fullstack Developer</Text>
          </div>

          <div>
            <Text>mujahid.ansori.dev@gmail.com</Text>
            <Text>081286524358</Text>
          </div>
        </div>
      </div>

      <Title customStyle='text-2xl mt-8'>Progress</Title>
      <div className='border-2 mt-4 p-4 rounded'>
        <Title customStyle='font-semibold text-xl'>Javascript</Title>
        <div className='mt-4'>
          <div className='w-full h-[20px] rounded-full bg-gray-200 mt-2'>
            <div className='h-[20px] w-[50%] rounded-full bg-orange-300'></div>
          </div>
          <div className='w-full mt-2 text-sm'>
            <Text customStyle='text-gray-500'>50% on the go</Text>
          </div>
        </div>
        <div className='mt-8'>
          <Text customStyle='text-gray-500 text-md'>
            58 of 100 sub courses completed
          </Text>
          <Text customStyle='text-gray-500 text-md'>
            0 of 2 big projects completed
          </Text>
        </div>
      </div>
    </div>
  );
}
