const express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.send('user information');

});

router.get('/newuser', (req, res) => {
    res.send(' new user  added');

});
router.get('/deleteuser', (req, res) => {
    res.send('user deleted');

});
router.route('/:id')
    .get((req, res) => {
        console.log(req.usery);
    res.send('retrive id value  :  ' + req.params.id);
    })
    .put((req, res) => {
    res.send('update id value  :  ' + req.params.id);
    })
    .delete((req, res) => {
    res.send('delete id value  :  ' + req.params.id);
    });
    const user=[{name:"raja"},{name:"rani"},{name:"chipoi"}];
    router.param('id',(req,res,next,id)=>{
        console.log(id);
        req.usery=user[id];
        next();
    });


module.exports = router;
