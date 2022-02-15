import express from 'express';
import {urlencoded, json} from 'body-parser';
import ArticleRoutes from './src/routes/articles.routes.js';

const app = express();

express.use(urlencoded({ entended: true })); // Encode l'url afin d'avoir un meilleur traitement des url contenant des caractères spéciaux
express.use(json()); // Gère le format json

// Routes

app.use("/api/articles", ArticleRoutes);

app.listen(process.env.DEV_PORT);