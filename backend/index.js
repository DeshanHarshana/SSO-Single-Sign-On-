const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');
const passportSetup = require('./passport');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');

app.use(
    cookieSession(
        {
            name: 'session',
            keys: ['lama'],
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        }
    )
)

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors(
        {
            origin: 'http://localhost:3000',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true
        }
    )
);

app.use('/auth', authRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000.');
});