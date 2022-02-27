import { Router } from "express";

const ErrorsRoutes = Router(); 

// Errors
ErrorsRoutes.use((req, res, next) => {
    res.status(404) // I put it here on purpose (cause of the 401 error)
       .send('Page not found');
});

ErrorsRoutes.use((req, res, next) => {
    res.status(401)
       .send('Unauthorized');
});

ErrorsRoutes.use((req, res, next) => {
    res.status(403)
       .send('Forbidden');
});

ErrorsRoutes.use((req, res, next) => {
    res.status(419)
       .send('Page Expired');
});

ErrorsRoutes.use((req, res, next) => {
    res.status(429)
       .send('Too Many Requests');
});

ErrorsRoutes.use((req, res, next) => {
    res.status(500)
       .send('Internal server error');
});

ErrorsRoutes.use((req, res, next) => {
    res.status(503)
       .send('Service Unavailable');
});

export default ErrorsRoutes;
