import React from 'react';
import { useSelector } from 'react-redux';

const Total = (props) => {
  const price = useSelector(state => state.car.price)
  const additionalPrice = useSelector(state => state.additionalPrice)

  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
};

export default Total;
