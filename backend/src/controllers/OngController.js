const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(request, response) {
        return response.json(await connection('ongs').select('*'));
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        console.log('id > ', id)
        await connection('ongs').insert({
            id: id,
            name: name,
            email: email,
            whatsapp: whatsapp,
            city: city,
            uf: uf
        });
        return response.json({ result: `Ong saved! #${id}` });
    },

    async update(request, response) {
        const { id, name, email, whatsapp, city, uf } = request.body;
        await connection('ongs').update({
            id: id,
            name: name,
            email: email,
            whatsapp: whatsapp,
            city: city,
            uf: uf
        });
        return response.json({ result: `Ong ${name} updated!` })
    },

    async delete(request, response) {
        const params = request.params;
        await connection('ongs').delete({
            id: params.id
        });
        return response.json({ result: `Ong deleted!` })
    }
};