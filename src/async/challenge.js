const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

const anotherFunction = async (url) => {
  try {
    const data = await fetchData(url);
    const character = await fetchData(`${API}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);

    console.log(`
            Number: ${data.info.count}
            Name: ${character.name}
            Origin: ${origin.dimension}
        `);
  } catch (error) {
    console.error(error);
  }
};

anotherFunction(API);
