import { Router } from "express";

const ArticleRoutes = Router(); 

// Articles
ArticleRoutes.get('/'); // Récupération de tous les articles
ArticleRoutes.get('/:id'); // Récupération d'un article spécifique

ArticleRoutes.post('/new'); // Création d'un nouvel article

ArticleRoutes.put('/:id'); // Modifier un article

ArticleRoutes.delete('/:id'); // Supprimer un article

export default ArticleRoutes;
