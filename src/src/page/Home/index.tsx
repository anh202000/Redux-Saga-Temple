import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../../store/redux/actionTypes';
import LoadingComponent from '../../component/loading';

function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state?.data);
  
  useEffect(() => {
    dispatch({ type: types.FETCH_RECIPE_START, param: '123123' });
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default Home;
