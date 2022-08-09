import { useState } from "react";
import useGet from "../apiVerbs/UseGet";

const UseGetSpells = (playerClass, level) => {
  // const [info, setMoreInfo] = useState();
  const getSpellList = () => {
    const url = `classes/${playerClass}/levels/${level}/spells`;
    const { data, error, loaded } = useGet(url);
    if (error) {
      console.log(error);
    }
    if (loaded && !error) return data;
  };

  return { getSpellList };
};
// const onNameClick = (index) => {
//   axios
//     .get(`https://www.dnd5eapi.co/api/spells/${index}/`)
//     .then(({ response }) => {
//       setMoreInfo(response);
//     });
// };

export default UseGetSpells;
