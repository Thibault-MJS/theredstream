import { Router } from "express";

const ArticleRoutes = Router(); 

ArticleRoutes.get('/'); // Récupération de tous les articles
ArticleRoutes.post('/new'); // Création d'un nouvel article
ArticleRoutes.get('/:id'); // Récupération d'un article spécifique
ArticleRoutes.put('/:id'); // Modifier un article
ArticleRoutes.delete('/:id'); // Supprimer un article

export default ArticleRoutes;