
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLoginAction } from './redux/services/auth.services';
function App() {

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authLoginAction({ username: "kminchelle", password: "0lelplR" }));
  }, [])

  return (
    <>
      <div className='text-3xl font-bold'>
        hello world {loading.toString()}
     </div>
    </>
  )
}

export default App
