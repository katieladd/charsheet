const axios = require("axios").default;
const { useState, useEffect } = require("react");

const url = "https://www.dnd5eapi.co/api/";

const UseGet = (resource) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const urlAndResource = `${url}${resource}`
  useEffect(() => {
    axios
    .get(urlAndResource)
    .then((response) => setData(response.data))
    .catch((error) => setError(error.message))
    .finally(() => setLoaded(true));
    
  }, []);
  return { data, error, loaded };
};

export default UseGet;
