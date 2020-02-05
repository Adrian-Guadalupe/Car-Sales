import React from 'react';
import { useSelector } from 'react-redux';

const Header = (props) => {
  const name = useSelector(state => state.car.name)
  const image = useSelector(state => state.car.image)
  const price = useSelector(state => state.car.name)

  return (
    <>
      <figure className="image is-128x128">
        <img src={image} alt={name} />
      </figure>
      <h2>{name}</h2>
      <p>Amount: ${price}</p>
    </>
  );
};

export default Header;