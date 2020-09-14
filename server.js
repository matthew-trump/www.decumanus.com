const express = require('express')
const app = express()
const port = process.env.PORT || 4017;

app.get('/', (req, res) => {
   res.sendFile('./index.html', { root: __dirname });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})