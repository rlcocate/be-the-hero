const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const incidents = await connection('incidents')
            .join('ongs', 'incidents.ong_id', '=', 'ongs.id')
            .limit(5) // Total de registros
            .offset((page - 1) * 5) // Pular registros
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf']);

        const [count] = await connection('incidents').count();
        response.header('X-Total-Count', count['count(*)']);
        return response.json(incidents);
    },
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;
        const [id] = await connection('incidents').insert({
            title, description, value, ong_id
        });
        return response.json({ result: `Incident saved! #${id}` });
    },
    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        if (incident.ong_id != ong_id) {
            console.log('Ong is different!!');
            return response
                .status(401) // Unauthorized
                .json({ result: 'Operation not allowed! ' });
        }

        await connection('incidents').where('id', id).delete();

        return response
            .status(204) //NoContent
            .send();        // Usado pra enviar resposta mesmo que vazia
    }
};