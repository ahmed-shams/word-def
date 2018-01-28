const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Dictionary = require('./app/models/dictionary');
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var router = express.Router();

app.use('/api', router);

router.get('/', function(req, res) {
  res.json({message: 'welcome to our API'});
});

router.get('/*', function(req, res) {
  const pathArr = req.url.split('/');
  if(pathArr.length != 2 ) {
    res.status(500).send({success: false, message: 'Invalid URL!'});
  } else {
    const word = pathArr[1];
    Dictionary.findDef(word).then( (defs) => {
      console.log(defs);
      res.json({defs: defs});
    });
  }
});

app.listen(port);

console.log('Server listening on port: ' + port);
