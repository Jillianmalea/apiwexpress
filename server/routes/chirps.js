const express = require('express'),
router=express.Router(),
chirpStore = require('../chirpstore');

router.get('/:id?', (req, res) => {
    if (req.params.id){
        let chirp = chirpStore.GetChirp(req.params.id);
        res.send(chirp);
    } else{
        let chirps = chirpStore.GetChirp();
        res.send(chirps);
    }
})

router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
    //200 is means okay 
})

router.put('/:id',(req,res)=> {
    chirpStore.UpdateChirp(req.params.id, req.body);

})
router.delete('/:id', (req, res) => {
    chirpStore.DeleteChirp(req.params.id);
})
module.exports = router;