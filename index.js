const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

const osRoute = require('./routes/os');
const partOneRoute = require('./routes/partOne');
const partTwoRoute = require('./routes/partTwo');
const partThreeRoute = require('./routes/partThree');
const partFourRoute = require('./routes/partFour');
const partFiveRoute = require('./routes/partFive');
const partSixRoute = require('./routes/partSix');
const partSevenRoute = require('./routes/partSeven');
const partEightRoute = require('./routes/partEight');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use('/', osRoute);
app.use('/', partOneRoute);
app.use('/', partTwoRoute);
app.use('/', partThreeRoute);
app.use('/', partFourRoute);
app.use('/', partFiveRoute);
app.use('/', partSixRoute);
app.use('/', partSevenRoute);
app.use('/', partEightRoute);

app.listen(port);
