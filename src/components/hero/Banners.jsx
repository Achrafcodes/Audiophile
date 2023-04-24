import React from 'react';

export default function Banner(prop) {
  const styles = {
    backgroundImage: `url(${prop.backgroundImage})`
    /* other styling properties */
  };

  return (
    <div className="img">
      <h1 className="image" style={styles}>
        {prop.h1}
      </h1>
    </div>
  );
}
