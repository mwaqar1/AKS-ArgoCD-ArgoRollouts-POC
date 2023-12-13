const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

// Set up Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Define a route
app.get('/hello/:name', (req, res) => {
    res.render('hello', { name: req.params.name });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

