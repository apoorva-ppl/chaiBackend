import express from 'express'; // or use require if not using module type
const app = express();
app.use(express.static('dist'));

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

// Get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: 'A joke', content: 'This is a joke' },
        { id: 2, title: 'Another joke', content: 'This is another joke' },
        { id: 3, title: 'Third joke', content: 'This is third joke' },
        { id: 4, title: 'Fourth joke', content: 'This is fourth joke' },
        { id: 5, title: 'Fifth joke', content: 'This is five joke' },
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
