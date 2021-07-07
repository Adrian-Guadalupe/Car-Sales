import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const {name, image, price} = useSelector(state => state.car)
  const additionalPrice = useSelector(state => state.additionalPrice)

  return (
    <>
      <figure className="image is-128x128">
        <img src={image} alt={name} />
      </figure>
      <h2>{name}</h2>
      <p>Amount: ${price + additionalPrice}</p>
    </>
  );
};

export default Header;