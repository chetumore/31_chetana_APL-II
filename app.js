const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Middleware to serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Home route
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', welcomeMessage: 'Welcome to My Awesome Web App!' });
});

// About route
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us', description: 'Learn more about us and our journey.' });
});

// Contact route (GET)
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

// Contact route (POST)
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact Form Data:', { name, email, message });
    res.render('thankyou', { title: 'Thank You', name });
});

// Catch-all 404 error page
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});
