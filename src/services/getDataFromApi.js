const getDataFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          species: character.species,
          image: character.image,
          planet: character.origin.name,
          status: character.status,
          episodes: character.episode,
        };
      });
    });
};
export default getDataFromApi;
