const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('Should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            // .set('Authorization', '6cd4763b') // DICA: pra informar o header neste tipo de request
            .send({
                name: "Nossa ONG",
                email: "contato@nossaong.org.net",
                whatsapp: "11912344321",
                city: "São Paulo",
                uf: "SP"
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});