import React, {useState, useEffect} from "react";

const Spell = (props) => {
  const {index, name} = props;

  return (
    <div className="spell-container" key={index}>
      <div className="spell-name">{name}</div>
    </div>
  )
};

export default Spell;