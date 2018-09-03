import React from 'react';

const filter = (props) => {
  return (
    <div>
      <input type="checkbox" name="drekaskati" value="drekaskati" onClick={props.onSelected}/>Drekaskáti
      <input type="checkbox" name="falkaskati" value="falkaskati" onClick={props.onSelected}/> Fálkaskáti
      <input type="checkbox" name="drottskati" value="drottskati"  onClick={props.onSelected}/>Dróttskáti
      <input type="checkbox" name="utivera" value="utivera"  onClick={props.onSelected}/>Utivera
    </div>
  )
}

export default filter;