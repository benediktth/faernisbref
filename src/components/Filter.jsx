import React from 'react';

const filter = (props) => {
  return (
    <div>
      <input type="checkbox" name="vehicle1" value="Bike" /> I have a bike<br />
      <input type="checkbox" name="vehicle2" value="Car" /> I have a car<br />
      <input type="checkbox" name="vehicle3" value="Boat" checked /> I have a boat<br />
    </div>
  )
}

export default filter;