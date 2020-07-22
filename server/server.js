//$npm run server// from haiku_express folder

const express = require ('express');
const app = express();
const port = 5000;
//const port = process.env.PORT || 5000;
//var cors = require('cors');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


var models = require('./index.js');
var ha = models.haikuModel;


// const whitelist = [
//     'http://localhost',
//     'http://localhost:3000',
//     'https://2haiku4u.vercel.app'
//   ] ;

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   enablePreflight: true
// }
// app.use(cors())
// app.options('*', cors());




const defaultHaiku = [
    [`Hello it's Lance here.`],
    [`I have a Haiku for you`],
    [`and hope you enjoy!`]
];


//make this the initial haiku displayed
app.get('/api/default', function(req, res, next) {
    res.send(defaultHaiku);
});


//random get haiku request
app.get('/api/random', function(req, res, next) {
        ha.findOne({order: ha.sequelize.random()})
        .then( (results) => {
            console.log(`line 33 ${results}`);
            res.json(results);
        })
        .catch((e) => console.error(e));
});


//post haiku to the DB
app.post('/api/submit', function(req, res, next) {
    console.log(req.body);
    let haikuSubmission = req.body.haikuLines;
    try {
        ha.create({
            rowOne:     haikuSubmission[0],
            rowTwo:     haikuSubmission[1],
            rowThree:   haikuSubmission[2]
        });
        res.send('success');
    } catch (error) {
        res.send(error);
    }   
});


app.listen(port, function () {
	console.log('Listening on port 5000')
});
