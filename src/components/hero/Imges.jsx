import React from 'react';

export default function Imges(prop) {
  return (
    <div className="small-banner">
      <img src={prop.image} alt="" />
      <div className="caption">
        <h1>{prop.name}</h1>
      </div>
    </div>
  );
}
