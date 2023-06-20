let worlds = {
  Earth: {
    name: 'Earth'
  },
  name: "This is worldsService.js"
};

const worldsService = {
  getWorlds(name) {
    return worlds[name] ? [worlds[name]] : [];
  }
};

export default worldsService;
