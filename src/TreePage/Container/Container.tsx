import React from 'react';
import { useSelector } from 'react-redux';
import { selectData } from '../../store/data/selectors';

import { Trunk } from './Trunk/Trunk';

export const Container = () => {
  const data = useSelector(selectData);

  return (
    <div className='container'>
      <Trunk data={data}/>
    </div>
  );
};
