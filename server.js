import express from 'express'
import pkg from 'body-parser';
import { config } from 'dotenv';

import ArticleRoutes from './src/routes/articles.routes.js';
import ErrorsRoutes from './src/routes/errors.routes.js';

const app = express();
const {json, urlencoded} = pkg;

// App
app.use(urlencoded({ entended: true })); // Encode URL to get a better treatement with specials chars.
app.use(json()); // Includes json format

// Routes
app.get('/', (req, res) => res.redirect('/home')); // Default

app.use("/api/articles", ArticleRoutes); // Articles
app.use(ErrorsRoutes); // Errors

config();
app.listen(process.env.DEV_PORT);
