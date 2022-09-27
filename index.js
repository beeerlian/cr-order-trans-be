const express = require('express');
const bodyParser = require('body-parser');
const appRoute = require('./routes');
const db = require('./models')
//sequilize
db.sequelize.authenticate().then(() => {
       console.log('Connected to database');
       db.sequelize.sync().then(() => {
              console.log('Synced to database');

       }).catch((err) => {
              console.log(`Failed to sync database : ${err}`);
       });
}).catch((err) => {
       console.log(`Failed connect to database : ${err}`);
});

//express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

appRoute(app)


app.listen(8080, () => {
       console.log('Server running at http://localhost:8080/');
});