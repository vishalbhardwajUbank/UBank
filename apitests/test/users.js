import supertest from "supertest";
import { expect } from "chai";
import { faker } from '@faker-js/faker';

const api = supertest('https://petstore.swagger.io/v2');

describe('Pet API', () => {
    let dataId= Math.floor(Math.random() * 99999);
    const data = {
        "id": dataId,
        "category": {
            "id": Math.floor(Math.random() * 9999),
            "name": faker.animal.dog(),
        },
        "name": faker.animal.bear(), 
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": Math.floor(Math.random() * 999),
                "name": faker.animal.snake()
            }
        ],
        "status": "available"
    };

    it('POST new pet to the store', async () => {
        const response = await api.post('/pet')
            .send(data)
            .expect(200)
        dataId = response.body.id;
        expect(response.body).to.have.property('id');
        expect(response.body.name).to.equal(data.name);
        expect(response.body.status).to.equal(data.status);
        console.log(response.body);
    });

    it('find pet by id', async () => {
        const response = await api.get(`/pet/${dataId}`)
            .expect(200)
        expect(response.body).to.have.property('id');
        expect(response.body.name).to.equal(data.name);
        expect(response.body.status).to.equal(data.status);
    });

    it('update pet name', async () => {
        data.name = faker.animal.cat();
        console.log(dataId);
        const response = await api.put('/pet')
            .send(data)
            .expect(200)
        expect(response.body).to.have.property('id');
        expect(response.body.name).to.equal(data.name);
        expect(response.body.status).to.equal(data.status);
    });

    it('delete a pet', async () => {
        const response = await api.delete(`/pet/${dataId}`).set('api_key','special-key')
            .expect(200)
        expect(response.body.message).to.equal(`${dataId}`);
    });
});
