const express = require('express');
const { google } = require('googleapis');
const jwt = require('jsonwebtoken')
const multer = require("multer");
const mongo = require("mongodb")
const {MongoClient} = require("mongodb");

const app = express();

//Google Oauth2 client setup
const oauthClient = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://localhost:3001/api/google/oauth"
);

// Redirect to Google Authentication URL
const getGoogleOauthURL = () => {
    const url = oauthClient.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: ['https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ]
    });
};

const googleOauthURL = getGoogleOauthURL();

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

//Google OAuth callback
app.get('/api/google/oauth', async (req, res) => {
    try {
        const { code } = req.query;
        const { tokens } = await oauthClient.getToken(code);

        const accessToken = tokens.access_token;
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`);
        const profile = await response.json();
    
        // Create or update user in database, create JWT token
        const token = jwt.sign({email: profile.email, name: profile.name }, process.env.JWT_SECRET, { expiresIn: '2d' });

        //redirect to frontend with the JWT
        res.redirect(`http://localhost:3001/?token=${token}`);
    } catch (error) {
        console.error('Attention! Error during Google Oauth: ', error);
        res.status(500).json({ message: 'Error during Google Oauth!'})
    }
});