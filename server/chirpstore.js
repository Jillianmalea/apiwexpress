const fs = require('fs');
let chirps = {nextid:0};

if(fs.existsSync('chirps.json')){
    chirps.json.parse(fs.readFileSync('chirps.json'));

}
let getChirps = () => {
    return Object.assign({}, chirps);
}
let getChirp = id => {
    return Object.assign({}, chirps[id]);
}

let createChirp = (chirp) => {
    chirps[chirps.nextid++]= chirp;
    writeChirps();
}
let updateChrip = (id, chirp) => {
    chirps[id] = chirp;
    writeChirps();
}
let deleteChirp = id =>{
    delete chirps[id];
    writeChirps();
}
let writeChirps= () => {
    fs.writeFileSync('chirps.json', JSON.stringify(chirps));
}
module.exports = {
    GetChirp: getChirp,
    GetChirps: getChirps,
    CreateChirp: createChirp,
    UpdateChrip: updateChirp,
    DeleteChirp: deleteChirp

}