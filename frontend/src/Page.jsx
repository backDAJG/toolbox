import { Fragment, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Table from './components/Table';
import { useDispatch } from 'react-redux';
import { SET_FILES } from './store/actions';

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios({
      url: 'http://localhost:3001/files/data',
      method: 'GET',
    })
      .then((res) => {
        dispatch({ type: SET_FILES, data: res.data.files });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Table />
    </Fragment>
  );
};
