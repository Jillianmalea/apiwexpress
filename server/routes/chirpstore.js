const fs = require('fs');
let chirps = { nextid: 0 };

if(fs.existsSync('chirps.json')) {
    chirps = JSON.parse(fs.readFileSync('chirps.json'));
}

let getChirps = () => {
    return Object.assign({}, chirps); 
}
let createChirp = (chirp) => {
    chirps[chirps.nextid++] = chirp;
    writeChirps();
};
let getChirp = id => {
    return Object.assign({}, chirps[id]); 
}

let writeChirps = () => {
    fs.writeFileSync('chirps.json', JSON.stringify(chirps));
};

let updateChirp = (id, chirp) => {
    chirps[id] = chirp;
    writeChirps();
}

let deleteChirp = id => {
    delete chirps[id];
    writeChirps();
}


module.exports = {
    CreateChirp: createChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp,
    DeleteChirp: deleteChirp
}