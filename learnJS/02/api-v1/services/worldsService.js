let worlds = {
  Earth: {
    name: 'Earth',
    size: 8
  },
  Mercury: {
    name: 'Mercury',
    size: 12
  },
  name: "This is worldsService.js"
};

const worldsService = {
  getWorlds(name) {
    return worlds[name] ? [worlds[name]] : [];
  }
};

export default worldsService;
