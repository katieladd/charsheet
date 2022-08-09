import React, { useState, useEffect } from "react";

const Spell = (props) => {
  const { index, name} = props;

  return (
    <div
      className={`spell-name ${index}`}
      key={index}
      // onClick={() => onNameClick(index)}
    >
      {name}
    </div>
  );
};

export default Spell;
