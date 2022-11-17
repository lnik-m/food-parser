const app = require('express')();

const faundb = require('faunadb');
const client = new faundb.Client({ secret: 'fnAE1nL-jNACTKQAspw5JKeoPazTyzaK3tZuVStm' })

app.listen(5000, () => console.log('API on http://localhost:3000'))