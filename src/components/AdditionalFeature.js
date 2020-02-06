import React from 'react';
import { useDispatch } from 'react-redux';
import { addFeature } from '../redux';

const AdditionalFeature = ({ feature }) => {
  const dispatch = useDispatch()
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={()=> dispatch(addFeature(feature))} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
