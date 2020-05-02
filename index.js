const express = require('express');
const app = express();
const port = 4000;

app.engine('md', async (filePath, options, callback) =>
{
    
})

function handler(req, res){
  
    return res.send('Hello World');
}

app.get('/', handler);

app.listen(port, 
    () => console.log(`Hello world listening on port ${port}`)
);