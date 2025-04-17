require('dotenv').config();  // Load environment variables from .env file
const { API_BASE_URL , WEBSITE_ID_KEY} = require('./config/config');
const { getWebsiteID } = require('./utils/helper');
const { BOOKING_ENQUIRY_DYNAMIC_FIELDS_KEYS} = require('./config/config');

const express = require('express');
const path = require('path');
const app = express();
const port = 3005;
const metaLogoPath = "assets/images/icon/metalogo.png";
// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Define the views directory

// Serve static files (like CSS, images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const websiteID = await getWebsiteID(); 
   
   
    res.render('index', {body: "",websiteID,API_BASE_URL,WEBSITE_ID_KEY, BOOKING_ENQUIRY_DYNAMIC_FIELDS_KEYS});
});

app.get('/thankyou', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    
    res.render('thank-you', {body: "",});
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });