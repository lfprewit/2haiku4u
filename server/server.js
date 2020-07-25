//$npm run server// from haiku_express folder

const express = require ('express');
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors');
app.use(cors());//Simple Usage (Enable All CORS Requests)

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


var models = require('./index.js');
var ha = models.haikuModel;

//---------------------------------CORS-STUFF---------------------------
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

const haikuArray = [
    [
        [`Hello it's Lance here.`],
        [`I have a Haiku for you`],
        [`and hope you enjoy!`]
    ],
    [
        [`An old silent pond...`],
        [`A frog jumps into the pond,`],
        [`splash! Silence again.`]
    ],
    [
        [`Delightful display`],
        [`Snowdrops bow their pure white heads`],
        [`to the sun's glory.`]
    ],
    [
        [`Like crunchy cornflakes`],
        [`gold leaves rustle underfoot.`],
        [`Beauty in decay.`]
    ],
    [
        [`The chill, worming in.`],
        [`Shock, pleasure, bursting within.`],
        [`Summer tongue awakes`]
    ],
    [
        [`You and me alone`],
        [`Madness of world locked away`],
        [`Peace and quiet reigns`]
    ],
    [
        [`Strokes of affection`],
        [`Light and tenderly expressed`],
        [`Keep love's bonds so strong`]
    ],
    [
        [`Calm as a river`],
        [`Tranquility in my heart`],
        [`Blue summer skies reign`]
    ],
    [
        [`Aloha Lance here.`],
        [`I have a Haiku for you`],
        [`I hope you enjoy!`]
    ],
    [
        [`I like haikus, ya`],
        [`They make me feel like flying`],
        [`Please save my haiku`]
    ],
    [
        [`When you type the right`],
        [`amount of syllables here`],
        [`then it's gonna work.`]
    ]
];

//make this the initial haiku displayed
app.get('/api/default', function(req, res, next) {
    res.send(defaultHaiku);
});


//random get haiku request
app.get('/api/random', function(req, res, next) {
        ha.findOne({attributes: ['rowone', 'rowtwo', 'rowthree'], order: ha.sequelize.random()})
        .then( (results) => {
            console.log(`line 33 ${results}`);
            res.json(results);
        })
        .catch((e) => console.error(e));
});

// //workaround: random selection from haiku array
// app.get('/api/random', function(req, res, next) {
//     let randomHaikuIndex = [Math.floor(Math.random() * 11)];
//     let randomHaiku = haikuArray[randomHaikuIndex];
//     res.send(randomHaiku);
// });

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
