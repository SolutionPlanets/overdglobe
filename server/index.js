const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors())
app.use(express.json());

//console.log(app)

app.get('/', (req, res) => {
    res.send('Hello from our server!')
})

app.listen(port, () => {
      console.log(`server listening on port ${port}`)
})

