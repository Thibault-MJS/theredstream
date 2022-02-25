import { Router } from "express";

const Errors = Router(); 

// Default page
Errors.get('/', (req, res) => res.redirect('/home'));

// Errors
Errors.use((req, res, next) => {
    res.status(404) // I put it here on purpose (cause of the 401 error)
       .send('Page not found');
});

Errors.use((req, res, next) => {
    res.status(401)
       .send('Unauthorized');
});

Errors.use((req, res, next) => {
    res.status(403)
       .send('Forbidden');
});

Errors.use((req, res, next) => {
    res.status(419)
       .send('Page Expired');
});

Errors.use((req, res, next) => {
    res.status(429)
       .send('Too Many Requests');
});

Errors.use((req, res, next) => {
    res.status(500)
       .send('Internal server error');
});

Errors.use((req, res, next) => {
    res.status(503)
       .send('Service Unavailable');
});

export default Errors;