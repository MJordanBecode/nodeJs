const express = require("express");

const app = express();

require("path")(app);

const PORT = 5000;

app.listen(PORT, () =>{
    console.log('server running');
})