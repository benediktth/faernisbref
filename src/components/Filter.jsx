import React from 'react';

const filter = (props) => {
  return (
    <div>
      <input type="checkbox" name="drekaskati" value="drekaskati" />Drekaskáti
      <input type="checkbox" name="falkaskati" value="falkaskati" /> Fálkaskáti
      <input type="checkbox" name="drottskati" value="drottskati"  />Dróttskáti
      <input type="checkbox" name="utivera" value="utivera"  />Utivera
    </div>
  )
}

export default filter;