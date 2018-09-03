import React from 'react';

const badge = (props) => {
  return (
    <div className="card">
      <div className="card-header">
      <p>{props.name}</p>
      </div>
      <div className="card-content">
        <p>Bla bla blas</p>
      </div>
    </div>
  )
}

export default badge;