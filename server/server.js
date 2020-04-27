const express = require('express');
const cors = require('cors');
const port = 1234;

const app = express();

app.use(cors());
app.use(express.static('./public/dist'));

app.listen(port, (err) => {
  if (err) {
    console.log('Error in setting up server: ', err);
  } else {
    console.log('Proxy server is listening on port 1234');
  }
})
