const fs = require("fs");
let chirps = { nextid: 0 };

if (fs.existsSync("chirps.json")) {
  chirps = JSON.parse(fs.readFileSync("chirps.json"));
}

let getChirps = () => {
  return Object.assign({}, chirps); //create a copy and return
};

let getChirp = id => {
  return Object.assign({}, chirps[id]);
};

let createChirp = chirp => {
  chirps[chirps.nextid++] = chirp;
  writeChirps();
};

let updateChirp = (id, chirp) => {
  chirps[id] = chirp;
  writeChirps();
};

let deleteChirp = id => {
  delete chirps[id];
  writeChirps();
};

let writeChirps = () => {
  fs.writeFileSync("chirps.json", JSON.stringify(chirps));
};

module.exports = {
  Chirps: chirps,
  CreateChirp: createChirp,
  DeleteChirp: deleteChirp,
  GetChirps: getChirps,
  getChirp: getChirp,
  updateChirp: updateChirp
};
