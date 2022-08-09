import React, { useState, useEffect, useMemo } from "react";
import UseGetSpells from "../../services/hooks/useGetSpells";
import Spell from "./Spell";
// import UseGetSpells from "../../services/hooks/useGetSpells.jsx";

const SpellList = () => {
  const [spellsList, setSpellsList] = useState(null);
  // const [moreInfo, setMoreInfo] = useState(null);

  let playerClass = "wizard";
  let level = 0;
  let attackType = "";
  let castingTime = "";
  const getSpells = UseGetSpells(playerClass, level);
  const spells = getSpells.getSpellList();
  console.log(spells);

  return (
    <div>
      {spellsList ? (
        spellsList.map((spell) => {
          return (
            <Spell
              key={spell.index}
              index={spell.index}
              name={spell.name}
              onNameClick={() => {}}
            />
          );
        })
      ) : (
        <div>No spells</div>
      )}
    </div>
  );
};

export default SpellList;
