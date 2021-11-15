export const defineCor = (tipos) => {
  const tipo = typeof tipos !== 'string' ? tipos[0].name : tipos

  const cores = {
    normal: {
      color: "#a8a878",
    },
    fire: {
      color: "#f08030",
    },
    water: {
      color: "#6890f0",
    },
    electric: {
      color: "#f8d030",
    },
    grass: {
      color: "#78c850",
    },
    ice: {
      color: "#98d8d8",
    },
    ground: {
      color: "#e0c068",
    },
    flying: {
      color: "#a890f0",
    },
    ghost: {
      color: "#705898",
    },
    rock: {
      color: "#b8a038",
    },
    fighting: {
      color: "#c03028",
    },
    poison: {
      color: "#a040a0",
    },
    psychic: {
      color: "#f85888",
    },
    bug: {
      color: "#a8b820",
    },
    dark: {
      color: "#705848",
    },
    steel: {
      color: "#b8b8d0",
    },
    dragon: {
      color: "#7038f8",
    },
    fairy: {
      color: "#f781d8",
    },
  };

  return cores[tipo]
};