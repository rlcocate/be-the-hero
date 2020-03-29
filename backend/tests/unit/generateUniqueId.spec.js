const generateUniqueID = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('Should generate a unique ID', () => {
        const id = generateUniqueID();
        expect(id).toHaveLength(8);
    })
})