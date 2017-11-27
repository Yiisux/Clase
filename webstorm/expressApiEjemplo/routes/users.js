var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy'}]});
});

router.get('/:_id', (req, res, next) => {
  let id = req.params._id;
  if (id > 10)
    res.sendStatus(404);
  else
    res.json({id: id});
});

module.exports = router;
