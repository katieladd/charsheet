import React, {useState, useEffect} from "react";
import axios from "axios";
import Spell from "./Spell.jsx"

const SpellList = () => {
  const [spellList, setSpellsList] = useState(null);

  let playerClass = 'wizard';
  let level = 0;

  const getSpellsList = (playerClass) => {
    axios.get(`https://www.dnd5eapi.co/api/classes/${playerClass}/levels/${level}/spells`)
    .then(({data}) => {
      setSpellsList(data.results);
    })
  }

  useEffect(() => {
    getSpellsList(playerClass);
  }, [])

  return (
    <div>
      { spellList ?
        spellList.map((spell) => {
          return <Spell
          key={spell.index}
          name={spell.name}
          />
        }) :
        <div>No spells</div>
      }
    </div>
  );
};

export default SpellList;