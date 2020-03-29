const express = require('express');
const routes = express.Router();

const sessionController = require('./controllers/SessionController');
const profileController = require('./controllers/ProfileController');
const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const { celebrate, Segments, Joi } = require('celebrate');


// System's login.
routes.post('/session', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    }),
}), sessionController.create);

// User's incidents cases profile.
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), profileController.index);

// ONG CRUD.
routes.get('/ongs', ongController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(13), //05511912345678
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), ongController.create);
routes.put('/ongs', ongController.update);
routes.delete('/ongs/:id', ongController.delete);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}), incidentController.index);
routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    }),
}), incidentController.create);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}), incidentController.delete);

module.exports = routes;