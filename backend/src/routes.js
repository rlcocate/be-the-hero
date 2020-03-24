const express = require('express');
const routes = express.Router();

const sessionController = require('./controllers/SessionController');
const profileController = require('./controllers/ProfileController');
const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');


routes.get('/', (request, response) => {
    // return response.send('Hello World');
    return response.json({
        evento: 'Semana OmniStack 11',
        aluno: 'Rodrigo Cocate'
    });
});

routes.post('/session', sessionController.create);
routes.get('/profile', profileController.index);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);
routes.put('/ongs', ongController.update);
routes.delete('/ongs/:id', ongController.delete);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;