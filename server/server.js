const express = require('express');
const port = 2000;
const app = express();

app.use(express.static('../Rebekah-Reviews-service/client/bundle.js'));


app.listen(port, () => console.log(`Reviews service app listening on port ${port}`));