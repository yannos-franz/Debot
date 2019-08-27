const app = require('express')();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on ${ port }`))

app.get('/', (req, res) => res.send('Debot is online!'));