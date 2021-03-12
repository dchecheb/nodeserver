const express = require('express');
const app = express();
const {sequelize} = require('./models');
// const naverapi = require('./naverapi');

// server execute
app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => {
    res.send('Hello, Express');
})

app.listen(app.get('port'), () => {
    console.log('Server listen on port ', app.get('port'));
});

// connect to mysql
sequelize.sync({ force: false})
    .then(() => {
        console.log('MySQL connection successful.');
    })
    .catch((err) => {
        console.error(err);
    });
