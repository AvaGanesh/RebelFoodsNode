const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'./Assignment')));
app.get('*',function(req,res) {
    return res.sendFile(path.join(__dirname+'./Assignment/index.html'));
});

app.listen(port, () => {
    console.log(`Beer DB Assignment is running in ${port}`);
});