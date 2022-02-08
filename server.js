import express from 'express';
import {urlencoded, json} from 'body-parser';

const app = express();

express.use(urlencoded({ entended: true })); // Encode l'url afin d'avoir un meilleur traitement des url contenant des caractères spéciaux
express.use(json()); // Gère le format json

app.listen(process.env.DEV_PORT);