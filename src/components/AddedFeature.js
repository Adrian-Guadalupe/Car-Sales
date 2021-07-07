import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFeature } from '../redux';

const AddedFeature = ({ feature }) => {
  const dispatch = useDispatch()

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=> dispatch(removeFeature(feature))} className="button">X</button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
