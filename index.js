const express = require('express');
const app = express();

app.use(express.static('client-build/build'));

const path = require('path');
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client-build', 'build', 'index.html'));
});

app.post('/api/hello', (req, res) => {
    res.send('Hello Hack');
})

const PORT = process.env.PORT || 8080;
console.log('server started on port:',PORT);
app.listen(PORT);