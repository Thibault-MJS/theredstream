import express from 'express'
import pkg from 'body-parser';
import { config } from 'dotenv';

import ArticleRoutes from './src/routes/articles.routes.js';
import Errors from './src/routes/errors.routes.js';

const app = express();
const {json, urlencoded} = pkg;

app.use(urlencoded({ entended: true })); // Encode l'url afin d'avoir un meilleur traitement des url contenant des caractères spéciaux
app.use(json()); // Gère le format json

// Routes
app.use("/api/articles", ArticleRoutes);
app.use(Errors);

config();
app.listen(process.env.DEV_PORT);
