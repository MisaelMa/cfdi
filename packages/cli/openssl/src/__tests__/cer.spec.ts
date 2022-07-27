import {cer} from '../openssl/cer.class';

describe('Create Cer', () => {

    test('Return this startDate .cer', () => {
        const useCer = async () => {
            const date = await cer.date('src/certificados/LAN7008173R5.cer');
            console.log(date)
        }
        expect(useCer());
    })


});
