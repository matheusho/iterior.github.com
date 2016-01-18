var router = require('express').Router();

var home = require('./controllers/home');
var subscribe = require('./controllers/subscribes');

router.get('/', home.index);
router.get('/feedback', home.feedback);
router.post('/subscribes', subscribe.create);
router.get('/subscribes/send-feedback', subscribe.sendFeedback);
router.get('/subscribes/:email', subscribe.edit);
router.post('/subscribes/:email', subscribe.update);

router.get('/api/talks', function (req, res) {
  res.json(require('../public/talks'));
})

module.exports = router;
